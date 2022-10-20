import React, { createContext, useState } from 'react'

export default function Login() {
  

  function submitHandler(){
    var login=document.getElementById("loginUser").value;
    var pass=document.getElementById("loginPassword").value;
    
    if(!login=="" && !pass=="")
    {
      alert("Login Successfull");
    }  
    
  }
  
  return (
    <div class="login-wrapper">
    <form action="" class="form" className='login-form' onSubmit={submitHandler}>
      <h2>Login</h2>
      <div class="input-group">
        <input type="text" name="loginUser" id="loginUser" required />
        <label for="loginUser">User Name</label>
      </div>
      <div class="input-group">
        <input
          type="password"
          name="loginPassword"
          id="loginPassword"
          required
        />
        <label for="loginPassword">Password</label>
      </div>
      <input type="submit" value="Login" class="submit-btn"/>
    </form>
  </div>
   
  )
}
