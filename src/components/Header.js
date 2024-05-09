import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header flex justify-between items-center px-10  shadow-lg rounded-lg">
      <div className="logo-container">
        <img className="w-24 cursor-pointer" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items ">
        <ul className="flex gap-12  text-base">
          <li className="md:text-yellow-500 md:cursor-pointer hover:text-black md:block hidden">
            Home <i className="ri-home-2-line"></i>
          </li>
          <li className="md:cursor-pointer md:block hidden hover:text-yellow-500 ">
            Sign In <i className="ri-contacts-line"></i>
          </li>
          <li className="md:cursor-pointer md:block hidden hover:text-yellow-500">
            Help <i className="ri-information-line"></i>
          </li>
          <li>
            <i className="md:text-yellow-500 md:cursor-pointer hover:text-black md:block hidden ri-shopping-cart-line"></i>
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
