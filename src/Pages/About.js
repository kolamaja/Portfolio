import React from "react";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import ZST from "../img/ZST.jpg";
import KUL from "../img/KUL.png";

import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";

export const About = () => {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <NavBar />
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex p-2">
            <h1 className="text-6xl text-clay-500"> Education:</h1>
          </div>
          <div className="flex px-3">
            <h1 className="text-xl text-stone-500">
              I graduated with a bachelor's degree with a specialization in
              programming
            </h1>
          </div>
          <div class="relative flex py-10 items-center">
            <div class="flex-grow border-t border-clay-400"></div>

            <div class="flex-grow border-t border-clay-400"></div>
          </div>

          <div className="flex relative flex-row  py-6 justify-evenly items-center">
            <div className="  group flex flex-col items-center">
              <div
                className="absolute -top-20 hidden group-hover:inline-flex group-hover:delay-1000 pl-6 items-center z-40 justify-center
               bg-almostWhite-500 border-2 border-clay-500 shadow-lg shadow-elephant-500"
              >
                <div className="flex flex-col">
                  <h1 className="text-lg text-elephant-700 w-72">
                  Maria Sklodowska-Curie Technical School Complex
                  </h1>
                  <span className="text-sm w-64">
                    I graduated from school with a professional degree as an IT
                    technician
                  </span>
                </div>
                <img className="w-32 h-32 p-3" src={ZST} alt="" />
              </div>
              <h1 className="text-8xl  text-clay-500">
                <FaSchool />
              </h1>
              <h1 className="text-xl text-elephant-500">Technical IT school</h1>
            </div>
            <div className="group flex flex-col text-elephant-500 items-center">
            <div
                className="absolute -top-20 hidden group-hover:inline-flex group-hover:delay-1000 pl-6 items-center z-40 justify-center
               bg-almostWhite-500 border-2 border-clay-500 shadow-lg shadow-elephant-500"
              >
                <div className="flex flex-col">
                  <h1 className="text-lg text-elephant-700 w-72">
                  Catholic University of Lublin John Paul II
                  </h1>
                  <span className="text-sm text-black w-64">
                  I graduated with a bachelor's degree with a specialization in programming
                  </span>
                </div>
                <img className="w-32 h-32 p-3" src={KUL} alt="" />
              </div>
              <h1 className="text-8xl  text-clay-500">
                <MdSchool />
              </h1>
              <h1 className="text-xl ">Bachelor's degree in IT</h1>
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center"></div>
        </div>
        {/* <div className="flex flex-col">
          <h1 className="text-4xl">Education:</h1>

          <div className="flex  flex-row">
            <div className="flex flex-row">
              <h1 className="text-xl">Technical school</h1>
              <h1 className="text-7xl text-clay-500">
                <FaSchool />
              </h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-xl">Studies</h1>
              <h1 className="text-7xl text-clay-500">
                <MdSchool />
              </h1>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
