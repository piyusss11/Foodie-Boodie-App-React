import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function NewMenu() {
  const { resId } = useParams();

  const menuItems = useRestaurantMenu(resId);
  console.log(menuItems);
  

  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col justify-between w-1/2 m-auto mt-4" >
      <div className="h-40 border-2 border-black">Menu </div>
      <div className="menu-container">
        {menuItems.map((menuItem) => (
          <MenuCard key={menuItem.card.info.id} menuItem={menuItem.card.info} />
        ))}
      </div>
    </div>
  );
}

export default NewMenu;
