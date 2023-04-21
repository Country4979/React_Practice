import LoginPage from './components/auth/LoginPage'
import './App.css';
//import NewAdvertPage from './components/adverts/NewAdvertPage';
import AdvertsPage from './components/adverts/AdvertsPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import { Suspense } from 'react';
//import RequireAuth from './components/auth/RequireAuth';

function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
    console.log('click en logout')
    console.log(isLogged)
  };


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Layout
          isLogged={isLogged}
          onLogout={handleLogout}
          title="AlaPop">
            
          <Routes>
            <Route
              path="/login"
              element={<LoginPage isLogged={isLogged} onLogout={handleLogout} onLogin={handleLogin}/>} />
            {<Route
              path="/adverts"
              element={<AdvertsPage isLogged={isLogged}/>} />}
            {/*<Route
              path="/adverts/:Id"
              element={<AdvertPage /> } />
            <Route
              path="/adverts/new"
              element={
                //<RequireAuth isLogged={isLogged}>
                  <NewAdvertPage isLogged={isLogged} />
                //</RequireAuth>
              } />*/}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/404" element={<div>404 | Not found</div>} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </Layout>
      </div>
    </Suspense>
  );
}

export default App;
