import React from "react";
import dist1 from "../img/dist1.PNG";
import dist2 from "../img/dist2.PNG";
import dist3 from "../img/dist3.PNG";
import dist4 from "../img/dist4.PNG";
import { Link } from "react-router-dom";
export const DistributorLoader = () => {
  return (
    <div className="container mx-auto ">
      <Link to={"/portfolio"}><button className="bg-clay-500 p-2 m-4 rounded-full text-almostWhite-500">Go back</button></Link>
      <div className="flex flex-col my-10 justify-center items-center">
        <h1 className="text-2xl my-6">Work in progres</h1>
        <p className="max-w-md text-lg">
          This application is used to convert an xml file to json and display
          all the data it contains. It is possible to sort the results and enter
          the details of each result. After seeing the details, a window for
          editing the description is available.
        </p>
        <h1 className="text-2xl my-6">Below are some screenshots from the app</h1>
        <div className="flex flex-row justify-center flex-wrap ">
          <img
            className=" max-w-6xl shadow-md p-4 my-4 "
            src={dist1}
            alt={dist1}
          ></img>
          <img
            className=" max-w-6xl shadow-md p-4 my-4  "
            src={dist2}
            alt={dist2}
          ></img>
          <img
            className=" max-w-6xl shadow-md p-4 my-4  "
            src={dist3}
            alt={dist3}
          ></img>
          <img
            className=" max-w-6xl shadow-md p-4 my-4  "
            src={dist4}
            alt={dist4}
          ></img>
        </div>
      </div>
    </div>
  );
};
