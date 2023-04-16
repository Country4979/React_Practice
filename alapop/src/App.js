import LoginPage from './components/auth/LoginPage'
import './App.css';
import Headers from './layout/Headers';
import Navbar from './layout/Navbar';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
      <Headers />
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;
