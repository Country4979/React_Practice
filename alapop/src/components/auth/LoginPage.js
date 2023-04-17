
import { useState } from 'react';
import Button from '../shared/Button'
import { login, logout } from './service';

const LoginPage = ({isLogged, onLogin, onLogout}) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async event => {
        event.preventDefault();
        await login(credentials)
            
        console.log(credentials)

        onLogin();
    };
    
    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
          });
    };

    const handleClick = async () => {
        await logout();
        onLogout();
    }

    const buttonDisabled = !credentials.email || !credentials.password;
    const logoutButtonDisabbled = isLogged;
   
    return (
        <>
        <div className="infoContainer">
            <div className="leftSide" id="leftSide">
                <h1 id="textLogin">Already Logged?</h1>
                <p>Please <Button variant="primary" onClick={handleClick} disabled={!logoutButtonDisabbled}>logout</Button> before to access AlaPop.</p>
            </div>
        
            <div className="rigthSide">
                <form id="logUser" onSubmit={handleSubmit}>
                    <label htmlFor="email">email:</label>
                    <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={credentials.email}
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={credentials.password}
                    /><br />
                    <Button type="submit" variant="primary" disabled={buttonDisabled}>
                    Login
                    </Button><br />
                    <label htmlFor="rememberPass">Remember Password?</label>
                    <input type="checkbox" />
                </form>
            </div>
        </div>
    </>
    )
}

export default LoginPage;


