import React,{useEffect} from 'react'
import ContainerCard from '../../Components/Container/ContainerCard'
import {getCountries} from '../../Redux/actions'
import {useDispatch,useSelector} from "react-redux"
import "./Home.css"
import Searchbar from '../../Components/Searchbar/Searchbar'
import { Link } from 'react-router-dom'


const Home = ({onSearch}) => {
const dispatch = useDispatch();
const countries = useSelector((state)=>state.allCountries )
useEffect(()=>{
  dispatch(getCountries())
 },[])
 
  return (
    <div className='home-cont'>
       <div className={""}>
          <Searchbar onSearch={onSearch} />
      </div>
      
      <ContainerCard countries={countries}/>
     
    </div>
  )
}

export default Home