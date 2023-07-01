import React, { useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getCountries} from '../../Redux/actions';


function Searchbar({onSearch}) {

  const [nameCountry,setNameCountry]= useState("");

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCountries()) 
  },[dispatch])

  const handleChange = (event)=>{
   const inputValue = event.target.value;
   if(inputValue){
    setNameCountry(inputValue)
    onSearch(inputValue)
   }
   else if(!inputValue){
    setNameCountry("")
    dispatch(getCountries())
   }

  }

  return (
    <div>
      <label htmlFor="">Search country</label>
      <input 
      type="search"
      placeholder='Search'
      value={nameCountry}
      onChange={handleChange} />
    </div>
  )
}

export default Searchbar