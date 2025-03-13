import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SplideCarousel from './components/SplideCarousel'
import Navbar from './components/Navbar'
import React from 'react'
import AccessSplideCarousel from './components/AccessSplideCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="dark:bg-gray-900 mt-0">
        <hr className='text-white'/>
      <h1 className="text-3xl font-bold m-6 text-white">All types of Engines</h1>
      <SplideCarousel/>
      <hr className='text-white'/>
      <h1 className="text-3xl font-bold m-6 text-white">Accessories</h1>
      <AccessSplideCarousel />
      </div>

    </>
  )
}

export default App
