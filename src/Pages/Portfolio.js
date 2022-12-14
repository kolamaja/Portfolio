import React from "react";
import { Footer } from "../components/Footer";
import porf1 from "../img/portf1.JPG";
import dist1 from "../img/dist1.PNG";

import NavBar from "../components/NavBar";
import { PortfolioElement } from "../components/PortfolioElement";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <NavBar />
      <div className="container mx-auto">
        <div className="flex flex-row mt-6 mb-8 mx-28 justify-evenly flex-wrap    ">
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
          <Link to={"*"}>
            <PortfolioElement
              img={"https://picsum.photos/900/640"}
              title="Application 2"
              tag1="#React"
              tag2="#HTML5"
              tag3="#CSS3"
              tag4="#JavaScript"
            />
          </Link>
          <Link to={"*"}>
            <PortfolioElement
              img={"https://picsum.photos/800/640"}
              title="Application 3"
              tag1="#Angular"
              tag2="#HTML5"
              tag3="#Tailwind"
              tag4="#JavaScript"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
