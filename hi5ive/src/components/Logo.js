import React from 'react';
import logo from './assets/images/logo.png';
function Logo(){
  return (
    <img
      src={logo}
      alt="logo"
      style={{ width: '200px', height: '200px', cursor: 'pointer' }}
      onClick={onClick} // Add the click handler here 
    />
  );
}
export default Logo;