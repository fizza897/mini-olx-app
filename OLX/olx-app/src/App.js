import React, { useEffect, useState } from 'react'
import Register from './views/Register/Register'
import Login from "./views/Login/Login"
import Header from "./Header/Header"
import {auth} from "./config/Firebase/Firebase"
import { onAuthStateChanged } from 'firebase/auth'

export default function App() {
  const [screen,setScreen]=useState("loader")
  const [user,setUser]=useState()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log(user.uid)
        console.log(user)
        setUser(user)
        setScreen("login")
      }
      else{
        console.log("no user found")
        setScreen("register")
      }
    })
  })
  return (
    <>
    <div className='App'>
      {screen ==="login" && <Login setScreen={setScreen}/>}
      {screen ==="register" && <Register setScreen={setScreen}/>}
      {screen ==="header" && <Header setScreen={setScreen}/>}

      

    </div>
    </>
  )
}

