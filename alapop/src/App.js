import LoginPage from './components/auth/LoginPage'
import './App.css';
import Headers from './components/layout/Headers';
import Navbar from './components/layout/Navbar';
import NewAdv from './components/adverts/NewAdvertPage';
import AdvertsPage from './components/adverts/AdvertsPage';
import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
    console.log('click en logout')
    console.log(isLogged)
  };


  return (
    <div className="App">
      <Headers />
      <Navbar isLogged={isLogged} onLogout={handleLogout}/>
      {isLogged ? <AdvertsPage /> : <LoginPage isLogged={isLogged} onLogout={handleLogout} onLogin={handleLogin}/>}
    </div>
  );
}

export default App;
