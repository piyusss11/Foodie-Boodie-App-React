import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  console.log("header rendered");
  const onlineStatus = useOnlineStatus()

  return (
    <div className="header flex justify-between items-center px-10  shadow-lg rounded-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-24 cursor-pointer" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <div className="nav-items ">
        <ul className="flex gap-12  text-base">
          <li>
            Online status:{onlineStatus?"🟢":"🔴"}
          </li>
          <li className="md:text-yellow-500 md:cursor-pointer hover:text-black md:block hidden">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-black"}`
              }
              to="/"
            >
              Home<i className="ri-home-2-line"></i>
            </NavLink>
          </li>
          <li className="md:cursor-pointer md:block hidden hover:text-yellow-500">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-black"}`
              }
              to="/about"
            >
              About Us <i className="ri-information-line"></i>
            </NavLink>
          </li>
          <li className="md:cursor-pointer md:block hidden hover:text-yellow-500 ">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-black"}`
              }
              to="/contact"
            >
              Contact Us <i className="ri-contacts-line"></i>
            </NavLink>
          </li>
          <li>
            <i className="hover:text-yellow-500 md:cursor-pointer md:text-black md:block hidden ri-shopping-cart-line"></i>
          </li>
          <li>
            {" "}
            <button
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
              className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-white font-bold text-sm py-1 px-2 w-20 rounded-lg"
            >
              {btnName}
            </button>
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
