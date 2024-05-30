import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import ThemeButton from "./ThemeButton";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  // console.log("header rendered");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header flex justify-between items-center px-10  shadow-lg rounded-lg dark:shadow-dark-lg ">
      <div className="logo-container">
        <Link to="/">
          <img className="w-24 cursor-pointer" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <div className="nav-items ">
        <ul className="flex gap-12 text-base">
          <li className="dark:text-white">Online status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className=" md:text-yellow-500 md:cursor-pointer  md:block hidden dark:text-white">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500 dark:text-yellow-500" : "text-black dark:text-white"}`
              }
              to="/"
            >
              Home<i className="ri-home-2-line"></i>
            </NavLink>
          </li>
          <li className="md:cursor-pointer md:block hidden  ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500 dark:text-yellow-500" : "text-black dark:text-white"}`
              }
              to="/about"
            >
              About Us <i className=" ri-information-line"></i>
            </NavLink>
          </li>
          <li className="md:cursor-pointer md:block hidden hover:text-yellow-500 ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500 dark:text-yellow-500" : "text-black dark:text-white"}`
              }
              to="/contact"
            >
              Contact Us <i className="ri-contacts-line"></i>
            </NavLink>
          </li>
          <li className="flex hover:text-yellow-500 md:cursor-pointer md:text-black md:block ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500 dark:text-yellow-500" : "text-black dark:text-white"}`
              }
              to="/cart"
            >
              <i className=" ri-shopping-cart-line"></i>
              {cartItems.length}
            </NavLink>
          </li>
          <li>
            <button
              // onClick={() => {
              //   btnName === "Login"
              //     ? setbtnName("Logout")
              //     : setbtnName("Login");
              // }}
              className="bg-yellow-500  hover:bg-black hover:text-yellow-500 text-white font-bold text-sm py-1 px-2 w-24 rounded-lg"
            >
              User:{loggedInUser ? loggedInUser : "sign in"}
            </button>
          </li>
          <li>
            <ThemeButton />
          </li>
          <li>
            <i className="text-yellow-500 cursor-pointer ri-more-2-fill  md:hidden"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
