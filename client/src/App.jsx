import { useState } from 'react'

import './App.css'
import {Route,Routes} from "react-router-dom"
import Landing from './Views/Landing/Landing'
import Detail from './Views/Detail/Detail'
import Home from './Views/Home/Home'
import About from './Views/About/About'
import Navbar from './Components/Navbar/Navbar'


function App() {
 return(
  <div className='app-content'>
    <div className='routes-content'>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Landing/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      </div>
  </div>
 )
}

export default App
