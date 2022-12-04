import React from 'react'
import SadCat from '../img/SadCat.png'
export const PageNotFound = () => {
  return (
    <div className='container my-auto mx-auto'>
        
        <div className="flex flex-row justify-center items-center">
            <div className='flex flex-col items-center'>
            <img className='max-w-xl' src={SadCat} alt="SadCat" />
            <h1 className='text-4xl'>404 Page Not Found</h1>
            <h1 className='text-2xl text-gray-500'>Or is under construction ;)</h1>
            </div>
        </div>
        
    </div>
  )
}
