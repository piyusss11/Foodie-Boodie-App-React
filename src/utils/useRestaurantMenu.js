import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_URL + resId );
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

  return menuItems;
};
export default useRestaurantMenu;
