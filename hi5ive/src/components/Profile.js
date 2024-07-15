import React, { useState } from 'react';
import { Button } from './Button';

import '../style.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export const Profile = () => {
  const [name, setName] = useState('Hedy Lamarr');
  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <p>
        Hedy Lamarr was an Austrian-American actress and inventor. She was a
        major star in the Golden Age of Hollywood, and her most popular films
        were Algiers, Boom Town.
      </p>
    </div>
  );
};
