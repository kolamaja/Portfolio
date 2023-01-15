import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/MN.png";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
  const [mobileList, setMobileList] = useState(false);
  return (
    <nav className="shadow-xl px-10 z-30  bg-clay-500 text-almostWhite-500">
      <div className="relative container mx-auto  p-2">
        <div className="flex  items-center justify-between">
          <div className="pt-2">
            <Link to={"/"}>
              <img className="lg:h-16 h-12" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="lg:hidden flex text-2xl    text-white">
            <button className="outline-none focus:ring-2 focus:ring-white p-2 rounded-lg " onClick={() => setMobileList(!mobileList)}>
              <FaBars />
            </button>
          </div>

          <div className="hidden lg:flex space-x-9 text-xl">
            <Link to={"/"} className="hover:text-almostWhite-600">
              Home
            </Link>
            <Link to={"/about"} className="hover:text-almostWhite-600">
              About me
            </Link>
            <Link to={"/portfolio"} className="hover:text-almostWhite-600">
              My portfolio
            </Link>
            <Link to={"/contact"} className="hover:text-almostWhite-600">
              Contact
            </Link>
          </div>
        </div>
        {mobileList ? (
          <div className=" absolute right-2 left-2  flex flex-col mt-2  space-y-6 py-5 px-3  rounded-2xl shadow-lg text-black text-lg items-start bg-almostWhite-200 border-opacity-80 border-2 border-elephant-500">
            <Link to={"/"} className=" shadow-md w-full font-semibold px-2  bg-lightBlue-100 focus:bg-lightBlue-200">
              Home
            </Link>
            <Link to={"/about"} className=" shadow-md w-full font-semibold px-2 bg-lightBlue-100 focus:bg-lightBlue-200 ">
              About me
            </Link>
            <Link to={"/portfolio"} className=" shadow-md w-full font-semibold px-2 bg-lightBlue-100 focus:bg-lightBlue-200 ">
              My portfolio
            </Link>
            <Link to={"/contact"} className=" shadow-md w-full font-semibold px-2 bg-lightBlue-100 focus:bg-lightBlue-200 ">
              Contact
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
