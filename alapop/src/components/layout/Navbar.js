import Button from '../shared/Button';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { UseModal } from '../modals/UseModal';
import Modal from '../modals/Modal';
import { logout } from '../auth/service';
import './Navbar.css'

const Navbar = ({ isLogged, onLogout }) => {
    const [isOpenModalLogout, openModaleLogout, closeModaleLogout] =
        UseModal(false);
    const [isOpenModalLogin, openModaleLogin, closeModaleLogin] =
        UseModal(false);
    const [isOpenModalLoginNew, openModaleLoginNew, closeModaleLoginNew] =
        UseModal(false);
    const [isOpenModalLoginHome, openModaleLoginHome, closeModaleLoginHome] =
        UseModal(false);

    const navigate = useNavigate();
    
    const openModalLoginNew = () => {
        if (!isLogged) {
            openModaleLoginNew();
        } else {
            navigate('adverts/new');
        }
    };
    const openModalLoginHome = () => {
        if (!isLogged) {
            openModaleLoginHome();
        } else {
            navigate('adverts');
        }
    };

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
                className='modalLoginHome'
                isOpen={isOpenModalLoginHome}
                closeModal={closeModaleLoginHome}
            >
                <p>
                    You are not logged in now. You need to{' '}
                    <NavLink
                        to='/login'
                        as={Button}
                        className='NavBarButton'
                        variant='primary'
                        onClick={closeModaleLoginHome}
                    >
                        login
                    </NavLink>{' '}
                    to view ads and access other features of the App.
                </p>
            </Modal>

            <Modal
                className='modalLoginNew'
                isOpen={isOpenModalLoginNew}
                closeModal={closeModaleLoginNew}
            >
                <p>
                    You are not logged yet. You need to{' '}
                    <NavLink
                        to='/login'
                        as={Button}
                        className='NavBarButton'
                        variant='primary'
                        onClick={closeModaleLoginNew}
                    >
                        login
                    </NavLink>{' '}
                    to create ads and access other features of the App.
                </p>
            </Modal>

            <div className='navbar'>
                <div id='logged'></div>
                <Button
                    name='toNewAdv'
                    className='NavBarButton'
                    variant='primary'
                    onClick={openModalLoginNew}
                    disabled={!buttonDisabbled}
                >
                    New Adv.
                </Button>

                <Button
                    className='NavBarButton'
                    variant='primary'
                    disabled={!buttonDisabbled}
                    onClick={handleClick}
                >
                    Logout
                </Button>

                <Button
                    name='toHome'
                    className='NavBarButton'
                    variant='primary'
                    onClick={openModalLoginHome}
                    disabled={!buttonDisabbled}
                >
                    Home
                </Button>
            </div>
        </>
    );
};

export default Navbar;
