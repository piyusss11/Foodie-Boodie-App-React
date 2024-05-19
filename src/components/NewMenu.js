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
      <h1>{name}</h1>
      <div className="h-40 border-2 border-black py-2 px-3">
        <h1>rating <span>how many rating</span></h1> 
        <h1 className="text-yellow-500">cuisines</h1> 
        <h1 className="font-bold">Outlet<span>- adress</span> </h1> 
        <h1>delivery time</h1> 
       </div>

      <div className="menu-container">
        {menuItems.map((menuItem) => (
          <MenuCard key={menuItem.card.info.id} menuItem={menuItem.card.info} />
        ))}
      </div>
    </div>
  );
}

export default NewMenu;
