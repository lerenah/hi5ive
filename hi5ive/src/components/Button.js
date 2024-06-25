import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Button = ({ user }) => {
  const [name, setName] = useState('');
  const handleClick = async () => {
    try {
      const response = await axios.get('/user');
      console.log(response.data);
      console.log('Hello from test branch');
      setName(response.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleClick}>{name}</button>;
};
