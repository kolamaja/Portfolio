import React from "react";
import dist1 from "../img/dist1.PNG";
import dist2 from "../img/dist2.PNG";
import dist3 from "../img/dist3.PNG";
import dist4 from "../img/dist4.PNG";
export const DistributorLoader = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col my-10 justify-center items-center">
        <h1 className="text-2xl my-6">Work in progres</h1>
        <p>opis</p>
        <h1 className="text-2xl my-6">Here are some screens</h1>
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
