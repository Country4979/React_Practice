import Button from '../shared/Button';
import { NavLink } from 'react-router-dom';
import { UseModal } from '../modals/UseModal';
import Modal from '../modals/Modal';
import { logout } from '../auth/service';

const Navbar = ({ isLogged, onLogout }) => {
    const [isOpenModalLogout, openModaleLogout, closeModaleLogout] =
        UseModal(false);
    const [isOpenModalLogin, openModaleLogin, closeModaleLogin] =
        UseModal(false);

    const handleClick = () => {
        openModaleLogout();
    };

    const handleClickLogout = async () => {
        closeModaleLogout();
        try {
            await logout();
            openModaleLogin();
            setTimeout(() => {
                closeModaleLogin();
                onLogout();
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

    const buttonDisabbled = isLogged;

    return (
        <>
            <Modal
                className='modalLogout'
                isOpen={isOpenModalLogout}
                closeModal={closeModaleLogout}
            >
                <h1>Are you sure you want to logout?</h1>
                <Button onClick={handleClickLogout}>Yes, I want</Button>
                <Button onClick={closeModaleLogout}>No</Button>
            </Modal>

            <Modal
                className='modalLogin'
                isOpen={isOpenModalLogin}
                closeModal={closeModaleLogin}
            >
                <p>
                    You are not logged in now. You need to{' '}
                    <NavLink
                        to='/login'
                        as={Button}
                        className='NavBarButton'
                        variant='primary'
                        disabled={!buttonDisabbled}
                    >
                        login
                    </NavLink>{' '}
                    to view ads and access other features of the App.
                </p>
            </Modal>

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

                <Button
                    className='NavBarButton'
                    variant='primary'
                    disabled={!buttonDisabbled}
                    onClick={handleClick}
                >
                    Logout
                </Button>
                <NavLink
                    to='/adverts'
                    as={Button}
                    className='NavBarButton'
                    variant='primary'
                >
                    Home
                </NavLink>
            </div>
        </>
    );
};

export default Navbar;
