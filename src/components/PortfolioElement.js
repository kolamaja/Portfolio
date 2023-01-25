import React from "react";

export const PortfolioElement = (props) => {
  return (
    <div className="flex flex-col mt-8 mx-0 lg:mx-6 hover:scale-110 rounded-lg w-auto lg:max-w-lg shadow-elephant-400   shadow-lg">
      <img
        className=" max-w-xl lg:h-80 h-52  shadow-sm  mb-4  "
        src={props.img}
        alt={props.img}
      ></img>
      <h1 className="text-3xl pt-2 pl-4 font-bold mb-4 text-elephant-700">
        {props.title}
      </h1>
      <div className="flex flex-row mx-1">
        <span className="text-sm ml-4 mb-2 py-1 px-2 text-stone-100 rounded-full bg-elephant-300">
          {props.tag1}
        </span>
        <span className="text-sm ml-4 mb-2 py-1 px-2 text-stone-100 rounded-full bg-elephant-300">
          {props.tag2}
        </span>
        <span className="text-sm ml-4 mb-2 py-1 px-2 text-stone-100 rounded-full bg-elephant-300">
          {props.tag3}
        </span>
        <span className="text-sm ml-4 mb-2 py-1 px-2 text-stone-100 rounded-full bg-elephant-300">
          {props.tag4}
        </span>
      </div>
    </div>
  );
};
