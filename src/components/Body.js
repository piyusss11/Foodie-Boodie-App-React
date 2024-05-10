import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Filters from "./Filters";
import Search from "./Search";

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
    let resto =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(resto);
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
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListOfRestaurants(filteredList);
            }}
          />
          <Filters
            filtername="Delivery Time"
            clicky={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.sla.deliveryTime < 30
              );
              setListOfRestaurants(filteredList);
            }}
          />
          <Filters
            filtername="Reset"
            clicky={() => {
              const filteredList = ListOfRestaurants;
              setListOfRestaurants(ListOfRestaurants);// still writing the logic
            }}
          />
        </div>
        <Search />
      </div>

      <div className="res-container mt-10 flex flex-wrap gap-8 justify-center items-center m-20 ">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
