import React from "react";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

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

          <div className="flex flex-row  py-6 justify-evenly items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-8xl  text-clay-500">
                <FaSchool />
              </h1>
              <h1 className="text-xl text-elephant-500">Technical IT school</h1>
            </div>
            <div className="flex flex-col text-elephant-500 items-center">
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
