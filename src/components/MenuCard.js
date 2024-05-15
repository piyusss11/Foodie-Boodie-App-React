import React from "react";
import { CDN_URL } from "../utils/constants";

function MenuCard({ menuItem }) {
  const { name, price, description, defaultPrice,imageId } = menuItem;

  return (
    <div className="flex justify-between w-1/2 m-auto mt-4">
      <div>
        <h1>
          {name}
          <span> veg logo</span>
        </h1>
        <h2>₹ {price ? price / 100 : defaultPrice / 100}</h2>
        <h3>rating</h3>
      </div>
      <div className="flex flex-col">
        <img
          className="w-24 h-20 object-cover rounded-md"
          src={CDN_URL + imageId}
        ></img>
        <button className="bg-gray-100 text-green-500 rounded-md hover:bg-gray-300">
          Add
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
