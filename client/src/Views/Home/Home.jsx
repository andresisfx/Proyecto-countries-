import React,{useEffect} from 'react'
import ContainerCard from '../../Components/Container/ContainerCard'
import {getCountries} from '../../Redux/actions'
import {useDispatch,useSelector} from "react-redux"
import "./Home.css"



const Home = () => {
const dispatch = useDispatch();
const countries = useSelector((state)=>state.allCountries )
useEffect(()=>{
  dispatch(getCountries())
 },[])
  return (
    <div className='home-cont'>
    
      <ContainerCard countries={countries}></ContainerCard>
     
    </div>
  )
}

export default Home