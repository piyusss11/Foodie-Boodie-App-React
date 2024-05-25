import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuAccord from "../components/MenuAccord";

function MenuPage() {
  const { resId } = useParams();

  const { menuItems, accordItems } = useRestaurantMenu(resId);

  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col justify-between w-1/2 m-auto mt-4">
      <h1>{name}</h1>
      <div className="h-40 border-2 border-black py-2 px-3">
        <h1>
          rating <span>how many rating</span>
        </h1>
        <h1 className="text-yellow-500">cuisines</h1>
        <h1 className="font-bold">
          Outlet<span>- adress</span>{" "}
        </h1>
        <h1>delivery time</h1>
      </div>
      <div className="menu-container">
        {accordItems.map((categories, index) => (
          <MenuAccord
            key={index}
            data={categories?.card?.card}
            showItems={false}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
