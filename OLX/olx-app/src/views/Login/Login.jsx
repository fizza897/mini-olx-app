import React, { useState } from 'react'
import { login } from '../../config/Firebase/Firebase'
function Login(props) {
    console.log(props,"props")
    let name,value;
    const setState=(key,value)=>{
      setFormData({...formData,[name]:value});
    }
    const [formData,setFormData]=useState({
        name:"",
        email:""
    })
    console.log("formData",formData)
    
  return (
    <>
<form>
    <div className='container'>
<h1>This is Sign Page</h1>
<label htmlFor="Email">Email</label><br />
            <input className='border-2 border-rose-500' onChange={(e)=>{
              setState("email",e.target.value)
            }} value={formData.email} name='email'  id='Email'  placeholder='Enter your Name' /><br />
            <label htmlFor="Password">Password</label><br />
            <input className='border-2 border-rose-500' 
             value={formData.password} name='password'  type="Password" id='Password' placeholder='Enter your Password' /><br />
            <label  htmlFor="Phone Number">Phone Number</label><br />
            <button onClick={async(e)=>{
              const response=await login (formData)
              if(response.status ==="error"){
                alert(response.error)
              }
              else{
                props.setScreen("header")
                alert("sucess")
              }
            }}></button>
    </div>
</form>

    </>
  )
}
export default Login;