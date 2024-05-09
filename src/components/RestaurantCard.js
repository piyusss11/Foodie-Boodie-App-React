import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div
      className="bg-white res-card w-56 h-80 duration-300 hover:cursor-pointer overflow- hover:scale-110 border-black rounded-xl"
    >
      <img
        className="res-logo w-full h-[55%] rounded-xl object-cover	"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="px-3 pt-2 leading-tight font-medium">{name}</h3>
      <h4 className="px-3 pt-1 text-sm h-6 overflow-hidden">
        {cuisines.join(", ")}
      </h4>
      <h4 className="px-3 pt-1 text-sm text-yellow-400">{avgRating} stars</h4>
      <h4 className="px-3 pt-1  text-sm ">{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

