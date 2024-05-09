import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



import { useState, useEffect } from "react";

const Body = () => {
  //Local State Variable

  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.444809&lng=76.9964056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  };
if (ListOfRestaurants.length === 0 ){
  return (<Shimmer/>)
  
}
  return (
    <div className="body">
      <div className="flex justify-end mr-20 mt-6">
        <div className="flex justify-center mt-2">
          <div className="search-container flex gap-2">
            <input
              className="p-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-white font-bold text-sm py-1 px-2 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="filters mt-4 flex justify-center ">
        <button
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
          className="filter-btn p-2 border-2 rounded-3xl  text-xs active:text-white active:bg-yellow-500"
        >
          Top Rated
        </button>
      </div>

      <div className="mx-20 res-container mt-12 flex flex-wrap gap-8 justify-center items-center ">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
