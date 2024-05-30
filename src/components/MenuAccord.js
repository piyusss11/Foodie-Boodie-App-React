import React, { useState } from "react";
import MenuItems from "./MenuItems";

function MenuAccord(props) {
  // console.log(props);
  const { data } = props;
  const { title, itemCards } = data;
  const [showItems, setShowItems] = useState(false);
  const hideMenuClick = () => {
    setShowItems(!showItems);
  };

  // const {title} = data

  return (
    <div className=" shadow-md p-4 cursor-default bg-gray-50 font-[500] my-6 text-lg dark:bg-yellow-200 dark:rounded-xl">
      <div onClick={hideMenuClick} className="flex justify-between">
        <h1>
          {title} ({itemCards.length})
        </h1>
        {showItems ? (
          <i className="ri-arrow-down-s-line"></i>
        ) : (
          <i className="ri-arrow-up-s-line"></i>
        )}
      </div>
      {showItems &&
        itemCards.map((menuItem) => (
          <MenuItems
            key={menuItem?.card?.info.id}
            menuItem={menuItem?.card?.info}
          />
        ))}
    </div>
  );
}

export default MenuAccord;
