import React from 'react';
import logo from './assets/images/logo.png';
function Logo(){
  return (
    <img src={logo} alt="logo" style = {{ width:"100px", height: "100px"}} />
  );
}
export default Logo;