//import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../shared/Button'
import { login, logout } from './service';
//import Modal from '../shared/Modal';
//import { isOpen, closeModal } from '../shared/useModal'

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

    const handleClickModal = () => {
        return (
            <div>
                <Button /*onClick={closeModal}*/>No</Button>
                <Button onClick={handleClick}>Yes I'm sure</Button>

            </div>
            //<Modal isOpen={isOpen} closeModal={closeModal}>
            //</Modal>
        )
    }
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
                <p>Please <Button variant="primary" onClick={handleClickModal} disabled={!logoutButtonDisabbled}>logout</Button> before to access AlaPop.</p>
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
                    
                </form>
            </div>
        </div>
    </>
    )
}

export default LoginPage;


