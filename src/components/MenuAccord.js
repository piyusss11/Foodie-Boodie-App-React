import React, { useState } from "react";
import MenuItems from "./MenuItems";

function MenuAccord(props) {
  console.log(props);
  const { data } = props;
  const { title, itemCards } = data;
  const [showItems, setShowItems] = useState(false);
  const hideMenuClick = () => {
    setShowItems(!showItems);
  };

  // const {title} = data

  return (
    <div>
      {/*header */}
      <div className=" shadow-md p-4 cursor-default bg-gray-50 font-[500] my-6 text-lg">
        <div onClick={hideMenuClick} className="flex justify-between">
          <h1>
            {title} ({itemCards.length})
          </h1>
          {showItems ?<i class="ri-arrow-down-s-line"></i>:<i class="ri-arrow-up-s-line"></i>}
        </div>
        {showItems && itemCards.map((menuItem) => (
          <MenuItems
            key={menuItem?.card?.info.id}
            menuItem={menuItem?.card?.info}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuAccord;
