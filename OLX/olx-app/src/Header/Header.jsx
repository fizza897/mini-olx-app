import React from 'react'
import { Route,Routes, Router } from 'react-router-dom'
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"

export default function Header() {
  return (
    <>
    <div className='header'>
            <nav>
        <ul>
        <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>


      </Routes>
      </Router>
                

        </ul>
            </nav>
    </div>
    
    
    
    </>
  )
}
