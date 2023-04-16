import LoginPage from './components/auth/LoginPage'
import './App.css';
import Headers from './components/layout/Headers';
import Navbar from './components/layout/Navbar';
import Signup from './components/signup/Signup';
import NewAdv from './components/newAdv/NewAdv';

function App() {
  return (
    <div className="App">
      <Headers />
      <Navbar />
      <Signup />
      <LoginPage />
      <NewAdv />
    </div>
  );
}

export default App;
