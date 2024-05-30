import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { slaString } = resData?.info?.sla;

  return (
    <div className="bg-white res-card w-56 h-80 duration-300 hover:cursor-pointer overflow- hover:scale-110 border-black rounded-xl  dark:bg-yellow-500">
      <img
        className="res-logo w-full h-[55%] rounded-xl object-cover	"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="px-3 pt-2 leading-tight font-medium dark:text-white dark:font-bold">{name}</h3>
      <h4 className="px-3 pt-1 text-sm h-6 overflow-hidden dark:text-white ">
        {cuisines.join(", ")}
      </h4>
      <h4 className=" px-3 pt-1 text-sm  text-yellow-400 -white  dark:text-gray-200">
        {avgRating} stars
      </h4>
      <h4 className="px-3 pt-1  text-sm dark:text-white">{slaString} </h4>
    </div>
  );
};

export const withBestSellerLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute  z-10 m-2 px-2 bg-black text-xs text-white">
          Best
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
