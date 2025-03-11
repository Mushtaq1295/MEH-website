import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SplideCarousel from './components/SplideCarousel'
import Navbar from './components/Navbar'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1 className="text-3xl font-bold m-6 text-black">All types of Engines and Accessories available</h1>
      
      <SplideCarousel/>
    </>
  )
}

export default App
