import { useState } from "react";
import Button from "../shared/Button";
import { login } from './service';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        pasword: '',
    })

    const handleSubmit = async event => {
        event.preventDefault();
        await login(credentials);
    
        // I'm logged
        onLogin();
      };

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    }

    const buttonDisabled = !credentials.username || !credentials.password;
    
    return (   
        <>
            <div className="closeSessionBefore">
                <p className="closeSessionBefore">Please,  <span id="closeSessions" className="closeSessions "> Close Session </span>  before login again.</p>
            </div>
            <div className="infoContainer">
                <div className="leftSide" id="leftSide">
                    <h1 id="textLogin">¿New user?</h1>
                    <p>Please <a href="/signup.html">Signup</a> to access AlaPop and be able to buy and sell your items.</p>
                </div>
                <div class="rigthSide">
                    <form id="logUser" onSubmit={handleSubmit}>
                        <label for="username">Username:</label>
                        <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={credentials.username}
                        />
                        <br />
                        <label for="password">Password:</label>
                        <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={credentials.password}
                        />
                        <Button type="submit" variant="primary" disabled={buttonDisabled}>
                        Log in
                        </Button>
                        <input
                        type="file"
                        name="photo"
                        onChange={event => {
                            console.log(event.target.files[0]);
                        }}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};


export default LoginPage;