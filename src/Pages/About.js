import React from 'react'
import { FaSchool } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'

import { Footer } from '../components/Footer'
import NavBar from '../components/NavBar'


export const About = () => {
  return (
    <div className='flex flex-col justify-between h-screen '>
        <NavBar />
        <div className="container mx-auto">
            <div className='flex flex-col'>
            <h1 className='text-4xl'>Education:</h1>
            
            <div className='flex  flex-row'>
            <div className='flex flex-row'>
            <h1 className='text-xl'>Technical school</h1>
            <h1 className='text-7xl text-clay-500'><FaSchool /></h1>
            </div>
            <div className="flex flex-row">
            <h1 className='text-xl'>Studies</h1>
            <h1 className='text-7xl text-clay-500'><MdSchool /></h1>
            </div>
            </div>
           
            </div>
        </div>
        <Footer />
    </div>
  )
}
