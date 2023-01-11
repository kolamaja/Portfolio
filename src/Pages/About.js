import React from "react";
import { Education } from "../components/Education";

import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { Technologies } from "../components/Technologies";

export const About = () => {
  return (
    <div className="flex flex-col justify-between h-full ">
      <NavBar  />
      
      <Education  />
      
      <Technologies />
      <Footer />
    </div>
  );
};
