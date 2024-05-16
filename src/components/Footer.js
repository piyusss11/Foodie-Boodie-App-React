import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="md:mt-24 logos-1 p-4 flex-col bg-yellow-500 w-full flex justify-center items-center ">
        <div className="text-black duration-300 hover:scale-105 text-xl cursor-default">
          Good Health Starts with Good Food.
        </div>
        <div className="text-[#f0f0f0]  text-sm cursor-default ">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- with love from
          Foodie Boodie ❤️
        </div>
      </div>
      <div className="w-full bg-black text-white flex flex-col justify-center items-center ">
        <div className="logos-2 flex gap-12 pt-6">
          <NavLink to={"#"} >
            <i className="hover:text-yellow-500 hover:scale-110 duration-300 cursor-pointer text-3xl ri-facebook-line"></i>
          </NavLink>
          <NavLink to={"#"} >
            <i className="hover:text-yellow-500 hover:scale-110 duration-300 cursor-pointer text-3xl ri-instagram-line"></i>
          </NavLink>
          <NavLink to={"https://twitter.com/piyusss11"} target="_blank">
            <i className="hover:text-yellow-500 hover:scale-110 duration-300 cursor-pointer text-3xl ri-twitter-line"></i>
          </NavLink>
          <NavLink to={"https://github.com/piyusss11"} target="_blank">
            <i className="hover:text-yellow-500 hover:scale-110 duration-300 cursor-pointer text-3xl ri-github-fill"></i>
          </NavLink>
        </div>
        <div className="logos-3 flex gap-8 text-xl pt-4 ">
          <h2 className="hover:text-yellow-500 cursor-pointer">
            <NavLink to={"/"}>Home &nbsp;</NavLink>{" "}
          </h2>
          <span>|</span>
          <h2 className="hover:text-yellow-500 cursor-pointer">
            <NavLink to={"/contact"}> Contact &nbsp;</NavLink>
          </h2>
          <span>|</span>
          <h2 className="hover:text-yellow-500 cursor-pointer">
            <NavLink target="_blank" to={"https://piyusss.hashnode.dev/"}>
              Blog &nbsp;{" "}
            </NavLink>
          </h2>
          <span>|</span>
          <h2 className="hover:text-yellow-500 cursor-pointer">Delivery </h2>
        </div>
        <div className="pb-4 cursor-default pt-4">@copyright line</div>
      </div>
    </>
  );
};

export default Footer;
