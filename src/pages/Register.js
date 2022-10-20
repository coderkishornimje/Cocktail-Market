import React from 'react'

function Register() {
  return (
    <div class="container">
    <h1 id="title">Customer Registration Form</h1>
    <p id="description">Please fill your valuable information</p>
     <form id="survey-form">
       <label id="name-label">Full Name</label><input type="text" name="name" id="name" placeholder="Enter Full Name" required/>
       <label id="email-label">Email</label><input type="email" name="email" id="email" placeholder="Enter Email ID" required/>
        <label id="number-label">Number</label><input type="text" id="number" name="number" 
       placeholder="Mobile Number"
       min="1" max="10" required/>
       <label id="number-label">Password</label><input type="password" id="number" name="number" 
       placeholder="password"
       min="1" max="10" required/>
       <label id="number-label">Confirm Password</label><input type="password" id="number" name="number" 
       placeholder="confirm password"
       min="1" max="10" required/>

    <label id="gender-label">Gender</label>
<div id="gender-set">
<input type="radio" name="male" value="Male"/><label>Male</label>
<input type="radio" name="male" value="Male"/><label>Female</label>
</div>

  {/* <label id="option-label">Which option best describes your current role?
</label>
      <select id="dropdown">
        <option>Choose</option>
        <option>1</option>
      </select>

<label id="checkbox-label">What would you like to see improved? (Check all that aply)</label>


<label class="input-check">
<input type="checkbox" value="A Computer Science"/> 
A Computer Science</label><br/>
<label class="input-check">
<input type="checkbox" value="Just an Edutech"/> 
Just an Edutech </label><br/>
<label class="input-check">
<input type="checkbox" value="Mini saga game"/> 
Mini saga game </label><br/> */}

<label id="additional-comment">Additional Info:</label>
<textarea placeholder="Add extra info..." rows="5" cols="50"></textarea>

<input type="submit" id="submit" name="submit" value="Submit"
  className='btn-primary'
/>
     </form>
</div>
  )
}

export default Register