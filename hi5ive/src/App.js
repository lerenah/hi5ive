import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Profile } from './components/Profile';
import { UserGrid } from './components/UserGrid';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import HelloPage from './pages/HelloPage';

const dummyUseruser = {
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
  // condition logged in
    // uncomment below to be logged in
  //onst [loggedInUser, setLoggedInUser] = useState(user);


  // user is not logged in
    // uncomment below to be logged out
   const [loggedInUser, setLoggedInUser] = useState(null);

   //handles logout
   const handleLogout = () => {
    setLoggedInUser(null);
   };

  return (
    <div className="App">
      <div className="container">
        <Router>
        {loggedInUser && <Navbar user={loggedInUser} onLogout={handleLogout} />} {/* Conditionally render Navbar */}
          <Routes>
            <Route path="/" element={<HelloPage/>} />
            <Route path="/login"
             element={<LoginPage setLoggedInUser={setLoggedInUser} />}
              />
            <Route
            path="/users"
            element={loggedInUser ? <UserGrid />: <Navigate to="/login" />}
            />
            <Route
              path="/my-profile"
              element={loggedInUser ? <Profile user={loggedInUser} />: <Navigate to="/login" />}
            />
             <Route path="*" element={<Navigate to={loggedInUser ? "/users" : "/"} />} />

          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
