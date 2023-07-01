import React,{useState} from 'react';
import "./Form.css"

function Form() {

 const [datos,stDatos] = useState({
  name:"",
  difficulty:"",
  duration:"",
  


 })


  return (
    <div className='form-cont'>
   
      <form action="" >
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Difficulty</label>
        <input type="text" />
        <label htmlFor="">Duration</label>
        <input type="text" />
        <label htmlFor="">Season</label>
        <input type="text" />
        <label htmlFor="">Countries</label>
        <input type="text" />
        <button>Create activity</button>
      </form>
    </div>
  )
}

export default Form