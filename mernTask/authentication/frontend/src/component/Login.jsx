
import React from 'react'
import { useState } from 'react'
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({onSwitch}) => {
     const[input,setInput]=useState("")
     const[error,setError]=useState("")
     const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput((Values)=>({...Values,[name]:value}))
        console.log(input)
     }
     const handleSubmit=()=>{
         if(!input.email || !input.newpassword )
         {
             return setError("All Required Field!")
         }
         if(!/\S+@\S+\.\S+/.test(input.email)){
             return setError("email mismatch!")
         }
         
        
         setError("")
         toast.success("Login Successfully!!")
         
     }
   return (
     <>
     <div id="form-container">
         
         {error && <p className="error">{error}</p>}
      
      <input type="email" name="email" onChange={handleInput}/><br/><br/>
      <input type="password" name="newpassword" onChange={handleInput}/><br/><br/>
      <button onClick={handleSubmit}>Login</button>
      <p onClick={onSwitch} className="switch">Did you have an account?SignUp</p>
      </div>
   
      <ToastContainer/>
      </>
  )
}

export default Login