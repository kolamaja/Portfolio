import React from "react";
import { useState } from "react";
import { FaFolderOpen, FaMailBulk, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Main = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-full bg-home bg-cover  ">
      <div className="flex flex-row justify-center bg-opacity-80 px-4 bg-elephant-600 rounded-full -translate-y-20 lg:-translate-y-40 ">
        <h1 className="text-clay-400 bg-opacity-100 text-opacity-100 p-2 font-bold font-serif  text-base lg:text-2xl">
          My name is Mikolaj and
        </h1>
      </div>
      <div className="flex flex-row justify-center bg-opacity-80 px-4 bg-elephant-600 rounded-full -translate-y-16 lg:-translate-y-36 ">
        <h1 className="text-clay-400 bg-opacity-100 text-opacity-100 p-2 font-bold font-serif  text-base lg:text-2xl">
          I am
        </h1>
      </div>
      <div className="flex flex-row justify-center bg-opacity-80   bg-elephant-600 rounded-full -translate-y-14 lg:-translate-y-32 ">
        <h1 className="text-clay-400 bg-opacity-100 text-opacity-100 p-2 xl:px-6 font-bold font-serif text-base lg:text-2xl">
          Junior react front-end developer
        </h1>
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="flex text-5xl lg:text-8xl group mt-10 relative cursor-default text-clay-500"
      >
        <div className="flex flex-col group-focus:translate-y-48 group-focus:translate-x-32 lg:group-focus:translate-x-96 laptop:group-focus:translate-y-44 desktop:group-focus:translate-y-56 rounded-full transition group-hover:-translate-y-20 group-hover:translate-x-28 delay-300 duration-500  bg-opacity-90 cursor-pointer bg-elephant-600 border-white p-5 lg:p-10 translate-x-8 -translate-y-5  lg:translate-x-16  lg:-translate-y-8">
          {isActive ? (
            <Link to={"/contact"}>
              <FaMailBulk />
            </Link>
          ) : (
            <Link className="pointer-events-none" to={"/contact"}>
              <FaMailBulk />
            </Link>
          )}
        </div>

        <div className=" flex flex-col group-focus:translate-y-48 desktop:group-focus:translate-y-56 laptop:group-focus:translate-y-44 rounded-full transition  absolute group-hover:translate-y-20  z-10  delay-200 duration-500 bg-opacity-90 cursor-pointer bg-elephant-600 border-white p-5 lg:p-10">
          {isActive ? (
            <Link to={"/portfolio"}>
              <FaFolderOpen />
            </Link>
          ) : (
            <Link className="pointer-events-none" to={"/portfolio"}>
              <FaFolderOpen />
            </Link>
          )}
        </div>

        <div className="flex flex-col group-focus:translate-y-48 group-focus:-translate-x-32 lg:group-focus:-translate-x-96 desktop:group-focus:translate-y-56 laptop:group-focus:translate-y-44 rounded-full transition absolute group-hover:-translate-y-20 group-hover:-translate-x-28 delay-150 duration-500  bg-opacity-90 cursor-pointer bg-elephant-600 border-white -translate-x-8 -translate-y-5  lg:-translate-x-16  lg:-translate-y-8 p-5 lg:p-10">
          {isActive ? (
            <Link to={"/about"}>
              <FaUserTie />
            </Link>
          ) : (
            <Link className="pointer-events-none" to={"/about"}>
              <FaUserTie />
            </Link>
          )}
        </div>

        <h1 className="lg:text-2xl text-base invisible transition-all duration-500 delay-300 scale-0 rounded-full bg-opacity-80 p-1 lg:p-2 px-3 lg:px-4 bg-elephant-600 absolute translate-y-36 translate-x-24 lg:group-focus:translate-x-96 ml-9 lg:ml-7 desktop:group-focus:translate-y-40 laptop:group-focus:translate-y-28 group-focus:visible group-focus:scale-100">
          Contact
        </h1>
        <h1 className="lg:text-2xl text-base invisible transition-all duration-500 delay-300 scale-0 rounded-full bg-opacity-80 p-1 lg:p-2 px-3 lg:px-4 bg-elephant-600 absolute translate-y-36 -translate-x-32 lg:group-focus:-translate-x-96 ml-2 lg:ml-4 desktop:group-focus:translate-y-40 laptop:group-focus:translate-y-28 group-focus:visible group-focus:scale-100">
          About
        </h1>
        <h1 className="lg:text-2xl text-base invisible transition-all duration-500 delay-300 scale-0 rounded-full bg-opacity-80 p-1 lg:p-2 px-3 lg:px-4 bg-elephant-600 absolute translate-y-36  lg:ml-6 desktop:group-focus:translate-y-40 laptop:group-focus:translate-y-28 group-focus:visible group-focus:scale-100">
          Portfolio
        </h1>
      </button>
    </div>
  );
};
