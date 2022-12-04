import React from 'react'

export const PortfolioElement = (props) => {
  return (
    <div className="flex flex-col mt-8 mx-6 hover:scale-110 rounded-lg bg-lightBlue-100 max-w-sm shadow-elephant-300   shadow-lg">
                    <h1 className="text-3xl pt-2 pl-4  text-elephant-700">{props.title}</h1>
                    <img className="m-4 max-w-lg shadow-sm rounded-br-3xl rounded-xl " src={props.img} alt={props.img} ></img>
                    <div className="flex flex-row">
                        <span className="text-sm ml-4 mb-2 py-1 px-2 text-stone-100 rounded-full bg-elephant-300">{props.tag1}</span>
                        <span className="text-sm ml-4 mb-2 py-1 px-2 text-stone-100 rounded-full bg-elephant-300">{props.tag2}</span>
                        <span className="text-sm ml-4 mb-2 py-1 px-2 text-stone-100 rounded-full bg-elephant-300">{props.tag3}</span>
                        <span className="text-sm ml-4 mb-2 py-1 px-2 text-stone-100 rounded-full bg-elephant-300">{props.tag4}</span>
                        
                    </div>
                </div>
  )
}
