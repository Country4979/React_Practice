
import Button from '../../shared/Button'

const LoginPage = () => {

    const handleSubmit = event => {
        console.log('submit', event)
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
                    <label for="username">Username:</label>
                    <input
                    type="text"
                    name="username"

                    />
                    <br />
                    <label for="password">Password:</label>
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


