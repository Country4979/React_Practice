
import Button from '../../shared/Button'
import { login } from './service';

const LoginPage = () => {

    const handleSubmit = async event => {
        event.preventDefault();

       const response = await login(
            {
            email: event.target.email.value,
            password:  event.target.password.value,
            }
        )
        console.log(response)
    }
    
    return (
        <>
        <div className="infoContainer">
            <div className="leftSide" id="leftSide">
                <h1 id="textLogin">¿New user?</h1>
                <p>Please <Button variant="primary">Signup</Button> to access AlaPop and be able to buy and sell your items.</p>
            </div>
        
            <div className="rigthSide">
                <form id="logUser" onSubmit={handleSubmit}>
                    <label htmlFor="email">email:</label>
                    <input
                    type="email"
                    name="username"

                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    name="password"
                    />
                    <Button type="submit" variant="primary">
                    Login
                    </Button>
                </form>
            </div>
        </div>
    </>
    )
}

export default LoginPage;


