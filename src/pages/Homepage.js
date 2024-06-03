import React, { useCallback, useEffect, useState } from "react";
import RestaurantCard, {
  withBestSellerLabel,
} from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";

function Homepage() {
  const [tab, setTab] = useState("all");
  const [searchText, setSearchText] = useState(""); // Add searchText state
  const list = useRestaurantCard();
  // const [filteredList,setFilteredList] = useState(list)
  const BestSeller = withBestSellerLabel(RestaurantCard);

  const filterList = (list, tab, searchText) => {
    if (tab === "Top Rated") {
      return list.filter((item) => item.info.avgRating > 4.2);
    } else if (tab === "Delivery time") {
      return list.filter((item) => item.info.sla.deliveryTime < 35);
    }
    if (searchText) {
      return list.filter((item) =>
        item.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return list;
    }
  };

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters mt-8 flex justify-between mx-20">
        <div className="filter-btn flex gap-6 ">
          <Filters
            filtername="Top Rated"
            isActive={tab === "Top Rated"}
            clicky={() => {
              setTab("Top Rated");
            }}
          />

          <Filters
            filtername="Delivery time"
            isActive={tab === "Delivery time"}
            clicky={() => {
              setTab("Delivery time");
            }}
          />
          <Filters
            filtername="Reset"
            clicky={() => {
              setTab("all");
              setSearchText("");
            }}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="p-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search..."
          />
          <button
            onClick={() => {}}
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-white font-bold text-sm py-1 px-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container mt-10 flex flex-wrap gap-8 justify-center items-center mx-20">
        {filterList(list, tab, searchText).map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.2 ? (
              <BestSeller resData={restaurant} listdata={list} />
            ) : (
              <RestaurantCard resData={restaurant} listdata={list} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
