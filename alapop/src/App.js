import LoginPage from './components/auth/LoginPage'
import './App.css';
import Headers from './layout/Headers';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="App">
      <Headers />
      <Navbar />
      <LoginPage />
    </div>
  );
}

export default App;
