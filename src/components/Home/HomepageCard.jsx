function HomepageCard(props) {
  return (
    <div className="relative hover:shadow-lg transition-shadow  bg-white rounded-xl border border-gray-200">
      <div className="h-60 w-full overflow-hidden rounded-t-xl">
        <img src={props.imageUrl} alt="Course Image" />
      </div>

      <div className="p-2 pl-3 pr-3 mt-2">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <h2 className="text-sm text-gray-700 mt-1 ">{props.subtitle}</h2>
      <div className="flex justify-between items-center mt-2">
        <p className="text-black">₹{props.price}</p>
        <p className="text-blue-500 cursor-pointer mt-2"><a href="/signin">
        View</a></p>
      </div>
      </div>
    </div>
  );
}

export default HomepageCard;







