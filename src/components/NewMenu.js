import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function NewMenu() {
  const { resId } = useParams();

  const menuItems = useRestaurantMenu(resId);

  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="">Menu</h1>
      <div className="menu-container">
        {menuItems.map((menuItem) => (
          <MenuCard key={menuItem.card.info.id} menuItem={menuItem.card.info} />
        ))}
      </div>
    </div>
  );
}

export default NewMenu;
