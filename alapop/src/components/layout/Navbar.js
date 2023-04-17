import { logout } from "../auth/service";
import Button from "../shared/Button";

const Navbar = ({isLogged, onLogout}) => {
    
    const handleClick = async () => {
        await logout();
        onLogout();
    }

    const buttonDisabbled = isLogged;


    return (
        <section className="userActions">
        <div className = "navbar">
            <div id="logged"></div>
            <Button className="NavBarButton" variant="primary" disabled={!buttonDisabbled}>New Adv.</Button>
            <Button className="NavBarButton" variant="primary" disabled={buttonDisabbled}>Login</Button>
            <Button className="NavBarButton" variant="primary" disabled={!buttonDisabbled} onClick={handleClick}>Logout</Button>
        </div>
    </section>
    )
};

export default Navbar