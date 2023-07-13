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

 useEffect(()=>{
   fetchCountries();
   dispatch(getActivities())
 })

 const changeHandler=(event)=>{
  setForm({
    ...form,[event.target.value]:value
  })
 }

 const submitHandler =(event)=>{
 event.preventDefault()
 axios.post("http://localhost:3001/activities")
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


  return (
    <div className='form-cont'>
   
      <form onSubmit={submitHandler}>
        <label htmlFor="">Name</label>
        <input 
        type="text"
        name="name"
        value={form.name}
        onChange={changeHandler} />
        <label htmlFor="">Difficulty</label>
        <input 
        type="text"
        name="difficulty"
        value={form.difficulty}
        onChange={changeHandler} /> 
        <label htmlFor="">Duration</label>
        <input 
         type="text"
         name="duration"
         value={form.duration}
         onChange={changeHandler}  />
        <label htmlFor="">Season</label>
        <input 
         type="text"
         name="season"
         value={form.season}
         onChange={changeHandler}  />
        <label htmlFor="">Countries</label>
        <input 
         type="checkbox"
         name="name"
         value={form.countryId}
         onChange={changeHandler} />
        <button>Create activity</button>
      </form>
    </div>
  )
}

export default Form