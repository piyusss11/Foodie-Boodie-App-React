import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Filters from "./Filters";
import { Link } from "react-router-dom";


import { useState, useEffect } from "react";

const Body = () => {
  //Local State Variable

  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
    console.log("fetched");
    
  },[] );

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.444809&lng=76.9964056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    let resto =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(resto);
 
    setfilteredRestaurants(resto)
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters mt-8 flex justify-between mx-20">
        <div className="filter-btn flex gap-6 ">
          <Filters
            filtername="Top Rated"
            clicky={() => {
              const filteredList = filteredRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setfilteredRestaurants(filteredList);
            }}
          />
          <Filters
            filtername="Delivery Time"
            clicky={() => {
              const filteredList = filteredRestaurants.filter(
                (res) => res.info.sla.deliveryTime < 30
              );
              setfilteredRestaurants(filteredList);
            }}
          />
          <Filters
            filtername="Reset"
            clicky={() => {
              setfilteredRestaurants(ListOfRestaurants)
            }}
          />
        </div>
       
        <div className="flex gap-2">
          <input className="p-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            
            placeholder="Search..."
          ></input>
          <button
            onClick={() => {
              console.log(ListOfRestaurants);

              const filteredRestaurants = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRestaurants);
            }}
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-white font-bold text-sm py-1 px-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container  mt-10 flex flex-wrap gap-8 justify-center items-center  ">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;