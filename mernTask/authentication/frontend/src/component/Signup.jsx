import { useState } from "react";
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Signup = ({onSwitch}) => {
    const[input,setInput]=useState("")
    const[error,setError]=useState("")
    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput((Values)=>({...Values,[name]:value}))
       console.log(input)
    }
    const handleSubmit=()=>{
        if(!input.name || !input.email || !input.newpassword || !input.confirmpassword)
        {
            return setError("All Required Field!")
        }
        if(!/\S+@\S+\.\S+/.test(input.email)){
            return setError("email mismatch!")
        }
        if(input.newpassword.length <6){
            return setError("at least 6 character in password!")
        }
        if(input.newpassword !== input.confirmpassword){
            return setError ("password does not match!")
        }
        setError("")
        toast.success("SignUp Successfully!!")
        
    }
  return (
    <>
    <div id="form-container">
        
        {error && <p className="error">{error}</p>}
     <input type="text" name="name" onChange={handleInput}/><br/><br/>
     <input type="email" name="email" onChange={handleInput}/><br/><br/>
     <input type="password" name="newpassword" onChange={handleInput}/><br/><br/>
     <input type="password" name="confirmpassword" onChange={handleInput}/><br/><br/>
     <button onClick={handleSubmit}>SignUp</button>
       <p onClick={onSwitch} className="switch">Already have an account?Login</p>
     </div>
   
     <ToastContainer/>
    </>
  )
}

export default Signup