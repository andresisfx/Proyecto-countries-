import React,{useState,useEffect} from 'react';
import "./Form.css"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { getActivities } from '../../Redux/actions';

function Form() {

 const [form,setForm] = useState({
  name:"",
  difficulty:"",
  duration:"",
  countryId:[]
 })

 const [countries,setCountries] = useState([])
 const [errors,setErrors] = useState({
  name:"",
  difficulty:"",
  duration:"",
  season:"",
  countryId:"" 
 })
 const dispatch = useDispatch()

const fetchCountries = async()=>{
  try {
    const response = await axios.get("http://localhost:3001/countries")
    setCountries(response.data)
  } catch (error) {
    console.error("error fetching countries ", error)
  }
}
console.log(countries)

 useEffect(()=>{
   fetchCountries();
   dispatch(getActivities())
 },[dispatch])

 const changeHandler=(event)=>{
  const name = event.target.name
  const checked = event.target.checked
  const value = event.target.value
  if(name === "countryId"){
    
    if(checked){
      setForm((prevform)=>({
        ...prevform,
        countryId:[...prevform.countryId,value]
      }))
    }
    else{
      setForm((prevform)=>({
        ...prevform,
        countryId:prevform.countryId.filter((id)=> id!==value)
      }))
    }
  }
 else{
  setForm({
    ...form,
    [name]:value
  })
  
 } 
 }
 console.log(form)
 const submitHandler =(event)=>{
 event.preventDefault()
 axios.post("http://localhost:3001/activities",form)
 .then((res)=>{
  alert("the activity has been created")
  setForm({
  name:"",
  difficulty:"",
  duration:"",
  countryId:[]
  })
 })
 .catch((error)=>{
  if(error.response){
    console.error("Error in the request: ",error.response.data)
  }
  else{
    console.error("Error in the request: ", error.message)
  }
 })
 
}

console.log(form.countryId)
  

  return (
    <div className='form-cont'>
   
      <form onSubmit={submitHandler}>
          <div> 
            <label htmlFor="">Name</label>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={changeHandler} />
          </div> 
          <div>   
            <label htmlFor="">Difficulty</label>
            <input 
            type="text"
            name="difficulty"
            value={form.difficulty}
            onChange={changeHandler} />
          </div> 
          <div>    
            <label htmlFor="">Duration</label>
            <input 
             type="text"
             name="duration"
             value={form.duration}
             onChange={changeHandler}  />
          </div> 
          <div>    
            <label htmlFor="">Season</label>
            <input 
             type="text"
             name="season"
             value={form.season}
             onChange={changeHandler}  />
          </div> 
       
          {countries.map((country)=>(
          <div key={country.id}> 
             
            <input 
             type="checkbox"
             name="countryId"
             value={country.id}
             id={`country-${country.id}`}
             checked={form.countryId.includes(country.id)}
             onChange={changeHandler} />
             
            <label htmlFor={`country-${country.id}`}
            >{country.name}</label>

          </div>))} 
         
          <div> 
               
            <button>Create activity</button>
          </div> 
      </form>
    </div>
  )
  
}


export default Form