
import Button from "../shared/Button";
import { Link } from 'react-router-dom';

const Navbar = ({isLogged, onLogout}) => {
  

    const handleClick = () => {
        console.log('handleClick');
    }
    
    const buttonDisabbled = isLogged;


    return (
        <div className = "navbar">
            <div id="logged"></div>
            <Button className="NavBarButton" variant="primary" disabled={!buttonDisabbled}>New Adv.</Button>
            
            <Link to="/WarningLogout" as={Button} className="NavBarButton" variant="primary" disabled={!buttonDisabbled} onClick={handleClick}>Logout</Link>
        </div>
    )
};

export default Navbar