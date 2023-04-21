import Button from '../shared/Button';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ isLogged, onLogout }) => {
    const handleClick = () => {
        console.log('handleClick');
    };

    const buttonDisabbled = isLogged;

    return (
        <div className='navbar'>
            <div id='logged'></div>
            <NavLink
                to='adverts/new'
                as={Button}
                className='NavBarButton'
                variant='primary'
                disabled={!buttonDisabbled}
            >
                New Adv.
            </NavLink>

            <Link
                to='/WarningLogout'
                as={Button}
                className='NavBarButton'
                variant='primary'
                disabled={!buttonDisabbled}
                onClick={handleClick}
            >
                Logout
            </Link>
            <NavLink to='/adverts' as={Button} className='NavBarButton' variant='primary'>
                Home
            </NavLink>
        </div>
    );
};

export default Navbar;
