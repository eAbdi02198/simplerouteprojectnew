import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  const navi=useNavigate()
const submithandler=()=>{
  if(name==="eli"&& email==="e.abdi02198@gmail.com"){
    navi("/panel")
    document.cookie = "username=eli; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/";
  }
  else{navi("/")}
}
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>ورود به حساب کاربری</h2>
        <input type="text" placeholder="name..." required onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" placeholder="email..." required  onChange={(e)=>{setEmail(e.target.value)}}/>
        <button type="button"onClick={submithandler}>ورود</button>
      </form>
    </div>
  );
}