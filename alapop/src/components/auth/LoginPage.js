//import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../shared/Button';
import { login, logout } from './service';
import CheckBox from './Checbox';
import { useChecked } from './useChecked';

const LoginPage = ({ isLogged, onLogin, onLogout }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();


    await login(credentials, checked);

    onLogin();

    // Redirect to pathname --> NOT WORKING
    const to = location.state?.from?.pathname || '/';
    navigate(to);
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickLogout = async () => {
    await logout();
    onLogout();
  };

  const [checked, handleClickCheckBox] = useChecked(false);

  const buttonDisabled = !credentials.email || !credentials.password;
  const logoutButtonDisabbled = isLogged;

  return (
    <>
      <div className='infoContainer'>
        <div className='leftSide' id='leftSide'>
          <h1 id='textLogin'>Already Logged?</h1>
          <p>
            Please{' '}
            <Button
              variant='primary'
              onClick={handleClickLogout}
              disabled={!logoutButtonDisabbled}
            >
              logout
            </Button>{' '}
            before to access AlaPop.
          </p>
        </div>

        <div className='rigthSide'>
          <form id='logUser' onSubmit={handleSubmit}>
            <label htmlFor='email'>email:</label>
            <input
              type='email'
              name='email'
              onChange={handleChange}
              value={credentials.email}
            />
            <br />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              onChange={handleChange}
              value={credentials.password}
            />
            <br />
            <Button type='submit' variant='primary' disabled={buttonDisabled}>
              Login
            </Button>
            <br />
            <CheckBox
              name='rememberLogin'
              cheked={checked}
              setChecked={handleClickCheckBox}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
