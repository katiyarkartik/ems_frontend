import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()



    const handleLogin=async(e)=>{
      
       
        e.preventDefault();
        try {
           const response = await axios.post("http://localhost:9000/login",{
            username,
            password
           });
           console.log(response);
           alert("login successfull");
           navigate("/home")
        } catch (error) {
            console.log(error);
            alert("Invalid credentials");
        }
       
    }
  return (
    <div className='login-form'>
        <h2 className='form-title'>Login</h2>
        <input type="text" name="" id=""  placeholder='username' required onChange={(e)=>{
            setuserName(e.target.value);
        }}/>
        <input type="text" name="" id="" placeholder='password' required onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default LoginForm