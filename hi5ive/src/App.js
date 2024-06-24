// import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <Button user="Test User" />
      </header>
    </div>
  );
}

export default App;
