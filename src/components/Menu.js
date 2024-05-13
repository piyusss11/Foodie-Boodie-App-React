import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function Menu() {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.444809&lng=76.9964056&restaurantId=53777&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };
  const { name, costForTwoMessage, cuisines } =
  resInfo?.cards[2]?.card?.card?.info || {}

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h3>Cuisines: {cuisines.join(", ")}</h3>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Pizza</li>
        <li>Drinks</li>
      </ul>
    </div>
  );
}

export default Menu;
