import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);
  const [accordItems, setAccordItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_URL + resId);
      const data = await response.json();
      const menuData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
          ?.card.itemCards || [];
      setMenuItems(menuData)
      const categories =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setAccordItems(categories);
      console.log(categories);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { menuItems, accordItems } ;
};
export default useRestaurantMenu;
