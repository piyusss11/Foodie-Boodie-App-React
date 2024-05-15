import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { MENU_URL } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

function NewMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const params = useParams();
  console.log(params);
//   if (menuItems === 0) return <Shimmer />;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_URL + params.resId );
      const data = await response.json();
      const menuData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
          ?.card.itemCards || [];
      setMenuItems(menuData);
      console.log(menuData);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-container">
        {menuItems.map((menuItem) => (
          <MenuCard key={menuItem.card.info.id} menuItem={menuItem.card.info} />
        ))}
      </div>
    </div>
  );
}

export default NewMenu;
