import React, { useState } from 'react'
import {register} from "../../config/Firebase/Firebase"
// import { useNavigate } from 'react-router-dom'
 function Register(props) {
  // const auth=getAuth()
  // const navigate =useNavigate
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    phoneNumber:"",
    address:"",
    message:"",
  })
  // console.log("formData",formData)
  const getUserData=(key,value)=>{
    setFormData({...formData,[key]:value});
  
  }
  return (
    <>
    <div className="container bg-[url(https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg)] ">
      <h1 className='bg-gradient-to-bl text-5xl font-semibold text-blue-900'>Create Account</h1>
      <form>
        <div className=' form -group m-20' >
            <label htmlFor="Name">Name</label><br />
            <input className='border-2 border-rose-500' onChange={(e)=>{getUserData("name",e.target.value)}} value={formData.name}  id='Name' placeholder='Enter your Name'/><br />
            <label htmlFor="Email">Email</label><br />
            <input className='border-2 border-rose-500' onChange={(e)=>{getUserData("email",e.target.value)}} value={formData.email}   placeholder='Enter your Name' /><br />
            <label htmlFor="Password">Password</label><br />
            <input className='border-2 border-rose-500' onChange={(e)=>{getUserData("password",e.target.value)}} value={formData.password}  id='Password' placeholder='Enter your Password' /><br />
            <label  htmlFor="Phone Number">Phone Number</label><br />
            <input className='border-2 border-rose-500' onChange={(e)=>{getUserData("phoneNumber",e.target.value)}}  id='Phone Number' value={formData.phoneNumber} placeholder='Enter Your Phone Number'  /><br />
            <label htmlFor="Address">Address</label><br />
            <input className='border-2 border-rose-500' onChange={(e)=>{getUserData("address",e.target.value)}}  id="Address" value={formData.address}  placeholder='Enter your Address' /><br />
            <label htmlFor="Message">Message</label><br />
            <input className='border-2 border-rose-500' onChange={(e)=>{getUserData("message",e.target.value)}} id="Address" value={formData.message}  placeholder='Enter your Messages' /><br />
            <button onClick={async()=>{
              const response=await register(FormData)
              if(response.status==="error"){
                alert(response.error)
              }
              else{
                props.setScreen("login")
                alert("sucess")
              }
            }}  className='text-4xl rounded-full border-double border-2 border-sky-500 bg-green-900 text-white  md:border-blue-500 mt-3 font-semibold'>Register</button>   
        </div>
      </form>
            <div >
    </div>
            </div>
    </>
  )
}
export default Register