import React from 'react'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import NavBar from '../components/NavBar'

export const Home = () => {
  return (
    <div className='flex flex-col justify-between h-screen '>
        <NavBar />
        <Main />
        <Footer />
    </div>
  )
}
