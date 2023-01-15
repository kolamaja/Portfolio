import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-elephant-500 ">
      <div className="container  mx-auto ">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between py-12 lg:px-8 px-0 lg:mx-10 mx-8 md:space-y-0">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col space-y-3  ">
              <h1 className="text-xl text-almostWhite-500 pb-2 font-bold">Social</h1>
              <div className="flex flex-row">
                <div className="flex flex-col space-y-3 text-2xl  text-clay-500">
                  <FaLinkedin />

                  <FaGithub />

                  <FaFacebookSquare />
                </div>
                <div className="flex flex-col space-y-3 px-2 text-almostWhite-500">
                  <a
                    href="https://www.linkedin.com/in/mikołaj-niedźwiecki-426a80211/"
                    className="hover:text-almostWhite-600"
                  >
                    <h1 className="">Linkedin</h1>
                  </a>
                  <a
                    href="https://github.com/kolamaja/Portfolio"
                    className="hover:text-almostWhite-600"
                  >
                    <h1 className="">GitHub</h1>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100003771045734"
                    className="hover:text-almostWhite-600"
                  >
                    <h1 className="">Facebook</h1>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3 ">
              <h1 className="text-xl lg:px-8 px-0 mt-4 lg:mt-0 text-almostWhite-500 font-bold">Navigation</h1>
              <div className="flex flex-col space-y-2 lg:px-8 text-almostWhite-500">
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
          </div>
          <div className="flex flex-col space-y-3 mt-4 lg:mt-0 text-almostWhite-500">
            <h1 className="text-xl font-bold">Contact me!</h1>
            <div className="flex flex-row">
              <div className="flex flex-col space-y-6 text-2xl  text-clay-500">
                <Link to={"/contact"} className="hover:text-clay-400">
                  <FaPhoneSquareAlt />
                </Link>
                <Link to={"contact"} className="hover:text-clay-400">
                  <FaEnvelope />
                </Link>
                <Link to={"/contact"} className="hover:text-clay-400">
                  <ImLocation2 />
                </Link>
              </div>
              <div className="flex flex-col space-y-6 px-2 text-almostWhite-500">
                <h1 className="cursor-default">+48 730 279 733</h1>
                <h1 className="cursor-default">
                  mikolaj.niedzwiecki99@gmail.com
                </h1>
                <h1 className="cursor-default">Wrocław</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-elephant-600 flex flex-col text-gray-600  justify-center text-center">
        <p>Copyright &copy; 2022, All Rights Reserved</p>
      </div>
    </footer>
  );
};
