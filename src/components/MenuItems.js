import React from "react";
import { CDN_URL, NON_VEG_SVG, NO_IMG_URL, VEG_SVG } from "../utils/constants";

function MenuItems({ menuItem }) {
  const { name, price, description, defaultPrice, imageId, ratings, isVeg } =
    menuItem;
  const { aggregatedRating } = ratings;
  const { rating } = aggregatedRating;

  return (
    <div className="flex justify-between border-b-2 mt-4 w-full">
      <div className="w-4/5">
        <h1 className="flex items-center gap-2 text-base">
          {name}
          <img width={16} src={isVeg ? VEG_SVG : NON_VEG_SVG}></img>
        </h1>
        <h2 className="text-base text-gray-500">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </h2>
        <h1 className="text-sm font-normal text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis max-h-10">{description}</h1>
      </div>
      <div className="flex flex-col ml-2">
        <img
          className="w-24 h-20 object-cover rounded-md cursor-pointer"
          src={imageId ? CDN_URL + imageId : NO_IMG_URL}
        ></img>

        <button className="bg-gray-100 text-green-500 rounded-md hover:bg-gray-300 ">
          Add
        </button>
      </div>
    </div>
  );
}

export default MenuItems;
