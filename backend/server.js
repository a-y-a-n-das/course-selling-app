import express from "express"
const app = express();
import cors from 'cors';
import mongoose from "mongoose";
import router from "./routes/routes.js"
import dotenv from "dotenv"

app.use(cors());
app.use(express.json())
dotenv.config();

app.use("/api", router)

const port = import.meta.env.PORT
const mongoDb_url = import.meta.env.MONGODB_URL;

mongoose
  .connect(mongoDb_url)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(port, () => console.log('Server started on port '+ port));




