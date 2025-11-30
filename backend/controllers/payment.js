import Razorpay from "razorpay";
import crypto from "crypto";
import { Course, User } from "../models/model.js";

export const createOrder = async (req, res) => {
  const id = req.body.courseId;
  const email = req.user;
  const user = await User.findOne({ email });
  const course = await Course.findById(id);
  const { amount } = req.body;

  if (!course) {
    res.status(404).json({ message: "course not found!" });
    return;
  }
  if (user.purchasedCourses.includes(course._id)) {
    res.status(400).json({ message: "Course already purchased!" });
    return;
  }

  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
      amount: amount * 100, // ₹499 → 49900
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      notes: { courseId: course._id, userId: user._id },
    };
    const order = await instance.orders.create(options);
    res.status(201).json({ order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Error creating order" });
  }
};

export const verifyPayment = async (req, res) => {
  const id = req.body.courseId;
  const email = req.user;
  const user = await User.findOne({ email });
  const course = await Course.findById(id);
  try{

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  req.body;
  
  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
  .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
  .update(sign.toString())
  .digest("hex");
  
  if (razorpay_signature === expectedSign) {
      user.purchasedCourses.push(course._id);
      await user.save();
      console.log("Payment verified successfully");
      res.status(201).json({ message: "Course purchased successfully!" });
  } else {
    res.status(400).json({ message: "Invalid signature sent!" });
  }
}catch(error){
  console.error("Error verifying payment:", error);
  res.status(500).json({ message: "Error verifying payment" }); }
};
