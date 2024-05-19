import React from "react";
import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";

function Homepage() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [tab, setTab] = useState("all");
  const [searchText, setSearchText] = useState(""); // Add searchText state
    

  useEffect(() => {
    fetchData();
    console.log("fetched");
  }, []);

  useEffect(() => {
    applyFilter(tab); // Apply filter when tab changes
  }, [tab, list]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.444809&lng=76.9964056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    let resto =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setList(resto);
  };

  const applyFilter = (tab) => {
    if (tab === "Top Rated") {
      setFilteredList(list.filter((item) => item.info.avgRating > 4.4));
    } else if (tab === "Delivery time") {
      setFilteredList(list.filter((item) => item.info.sla.deliveryTime < 30));
    } else {
      setFilteredList(list);
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
            // isActive={tab === "all"}
            clicky={() => {
              setTab("all")
              // setFilteredList(list)
              setSearchText("")
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
            onClick={() => {
              const filteredRestaurants = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurants);
            }}
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-white font-bold text-sm py-1 px-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container mt-10 flex flex-wrap gap-8 justify-center items-center">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
