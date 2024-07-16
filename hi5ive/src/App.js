import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import { Profile } from './components/Profile';
import { UserGrid } from './components/UserGrid';
import Navbar from './components/Navbar';

const user = {
  id: 6,
  status: 'active',
  name: 'Hedy Lamar',
  hobbies: ['singing', 'dancing'],
  groups: ['trekking', 'cooking'],
  interests: ['movies', 'sports'],
  about: 'I am a singer and dancer',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
};

function App() {
  const [loggedInUser, setLoggedInUser] = useState(user);
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navbar user={loggedInUser} />
          <Routes>
            <Route path="/" element={<UserGrid />} />
            <Route
              path="/my-profile"
              element={<Profile user={loggedInUser} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
