// import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Profile } from './components/Profile';
import { UserGrid } from './components/UserGrid';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<UserGrid />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
