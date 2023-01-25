import React from "react";
import { Footer } from "../components/Footer";
import porf1 from "../img/portf1.JPG";
import dist1 from "../img/dist1.PNG";
import spa1 from "../img/spa1.PNG";

import NavBar from "../components/NavBar";
import { PortfolioElement } from "../components/PortfolioElement";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <NavBar />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row mt-6 mb-8 mx-0 lg:mx-28 justify-center items-center lg:justify-evenly lg:flex-wrap    ">
          <Link to={"/"}>
            <PortfolioElement
              img={porf1}
              title="My portfolio website"
              tag1="#React"
              tag2="#HTML5"
              tag3="#Tailwind"
              tag4="#JavaScript"
            />
          </Link>
          <Link to={"/distributor"}>
            <PortfolioElement
              img={dist1}
              title="Distributor Loader"
              tag1="#React"
              tag2="#HTML5"
              tag3="#Tailwind"
              tag4="#JavaScript"
            />
          </Link>
          <a target={"_blank"} href="https://deft-kataifi-80f7ca.netlify.app/" rel="noreferrer">
            <PortfolioElement
              img={spa1}
              title="SPA APP"
              tag1="#React"
              tag2="#HTML5"
              tag3="#Tailwind"
              tag4="#TypeScript"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
