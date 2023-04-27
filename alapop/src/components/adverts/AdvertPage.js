import { useParams, useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteAdvert, getAdvert } from './service';
import Advert from './Advert';
import { UseModal } from '../modals/UseModal';
import Modal from '../modals/Modal';
import '../shared/loading.css';

const AdvertPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [advert, setAdvert] = useState([]);
    const [error, setError] = useState(null);

    //--MODAL WINDOWS
    const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
    const [isOpenModal2, openModal2, closeModal2] = UseModal(false);
    const [isOpenModal3, openModal3, closeModal3] = UseModal(false);
    const [isOpenModalError, openModalError, closeModalError] = UseModal(false);

    const openModals2 = () => {
        if (isOpenModal1) {
            closeModal1();
        }
        openModal2();
    };

    const openModals3 = () => {
        if (isOpenModal2) {
            closeModal2();
        }
        openModal3();
    };

    const closeModals3 = () => {
        navigate('/adverts');
    };
    //--

    useEffect(() => {
        getAdvert(params.id)
            .then((advert) => {
                setIsLoading(true);
                setAdvert(advert);
            })
            .catch((error) => {
                if (error.status === 404) {
                    openModalError();
                    setTimeout(() => navigate('/404'), 4000);
                    return navigate('/404');
                }
                setError(error);
            })
            .finally(() => setIsLoading(false));
    }, [params.id, navigate]);

    const handleDelete = () => {
        deleteAdvert(params.id).then(() => {
            openModals3();
            setTimeout(() => {
                navigate('/adverts');
            }, 5000);
        });
    };

    return (
        <>
            {isLoading ? (
                <div className='loadingPage'>
                    <div className='loadingInfo'>
                        <h1>LOADING....</h1>
                        <div className='spinner' id='spinner'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Modal
                        name='modal1'
                        isOpen={isOpenModal1}
                        closeModal={closeModal1}
                    >
                        <h2 className='modalH2'>DELETING ADVERTISEMENT</h2>
                        <h3 className='modalH3'>
                            Are you sure you want to delete this ad?
                        </h3>
                        <Button
                            onClick={openModals2}
                            className='buttons deleteButton'
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={closeModal1}
                            className='buttons noDeleteButton'
                        >
                            No
                        </Button>
                    </Modal>
                    <Modal
                        name='modal2'
                        isOpen={isOpenModal2}
                        closeModal={closeModal2}
                    >
                        <h2>DELETING ADVERTISEMENT</h2>
                        <h3>Are you REALLY sure you want to delete this ad?</h3>
                        <p>This action will permanently delete your ad!!</p>
                        <Button
                            onClick={handleDelete}
                            className='buttons deleteButton'
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={closeModal2}
                            className='buttons noDeleteButton'
                        >
                            No
                        </Button>
                    </Modal>
                    <Modal
                        name='modal3'
                        isOpen={isOpenModal3}
                        closeModal={closeModal3}
                    >
                        <h2 className='modal-h2'>ADVERTISEMENT DELETED</h2>
                        <h3 className='modal-h3'>(I told you...)</h3>
                        <Button
                            onClick={closeModals3}
                            className='buttons deleteButton'
                        >
                            Ok
                        </Button>
                    </Modal>
                    <Advert {...advert} className='product' />

                    <Button
                        id='deleteAdd'
                        className='buttons deleteButton'
                        onClick={openModal1}
                    >
                        Delete Ad
                    </Button>
                </>
            )}
        </>
    );
};

export default AdvertPage;
