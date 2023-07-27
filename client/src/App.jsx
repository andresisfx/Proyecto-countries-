import { useState } from 'react'
import './App.css'
import {Route,Routes,useLocation} from "react-router-dom"
import Landing from './Views/Landing/Landing'
import Detail from './Views/Detail/Detail'
import Home from './Views/Home/Home'
import Form from './Views/Form/Form'
import Navbar from './Components/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { getCountriesName } from './Redux/actions'
import axios from "axios";


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  function onSearch (name){
    
     axios.get(`http://localhost:3001/countries?name=${name}`)
     .then(({data})=>{
      console.log(data)
      const response = data.length? data[0].name : null;
      dispatch(getCountriesName(response)) 
    })
     .catch ((error)=> {
      console.error(error);
      return alert("the country doesn`t exist")
    })
  }
 return(
  <div className='app-content'>
    <div className='routes-content'>
     { location.pathname !== "/" && <Navbar />}
      <Routes>
         <Route path="/" element={<Landing/>}/>
         <Route path="/home" element={<Home onSearch={onSearch}/>}/>
         <Route path="/create" element={<Form/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      </div>
  </div>
 )
}

export default App
