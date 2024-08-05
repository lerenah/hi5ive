import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.js';
import ImageSlider from '../components/ImageSlider.js';
// PLANNING:
// an about div
  // a logo in the top left corner
// a slideshow div
  // scrollable pictures
// call to action div
  // one button that takes the user to /login
  // one button that directs the user to /signup

function HelloPage(){
  const navigate = useNavigate();
  //login handler
const loginClick = () =>{
  navigate("/login"); // navigate to the login page
}
//signup handler
const signupClick = () => {
  navigate("/signup");
}


return (
  <div>
    <div className="About">
  <h1>About HI5IVE</h1>
  <div className="Logo">
  <Logo/>
  </div>
  <p>Have you ever felt isolated and secluded when trying to enjoy your pastime activities?
    Well, it’s time you reached out and hi 5ive’d someone who perhaps has the same hobbies as you.
    With Hi5ive, we aim to connect users on a deeper level based on their common interests.</p>
  </div>

  <div className="Scrollshow">
  <h1>CREATE MEMORIES TOGETHER</h1>
  {/* should have some sort of scrollable pictures with a nav bar  */}
   <ImageSlider/>
  </div>


  <div className="calltoaction">
  <h1>BECOME A 5IVER</h1>
  {/* Buttons here */}
  <button onClick={signupClick} className="authButton">
    SIGNUP
  </button>
  <button onClick={loginClick} className="authButton">
    LOGIN
  </button>
  </div>
</div>
  );
}





export default HelloPage;