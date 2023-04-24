import { useParams, useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteAdvert, getAdvert } from './service';
import Advert from './Advert';
import Modals from '../modals/Modals';
import { UseModal } from '../modals/UseModal';
import Modal from '../modals/Modal';

const AdvertPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [advert, setAdvert] = useState([]);
    const [error, setError] = useState(null);

    //--MODAL WINDOWS
    const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
    const [isOpenModal2, openModal2, closeModal2] = UseModal(false);
    const [isOpenModal3, openModal3, closeModal3] = UseModal(false);

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
        console.log(params.id);
        getAdvert(params.id)
            .then((advert) => setAdvert(advert))
            .catch((error) => {
                if (error.status === 404) {
                    return navigate('/404');
                }
                setError(error);
            });
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
            <h1>Advertisement Detail</h1>

            <div className='add'>
                <Modal
                    name='modal1'
                    isOpen={isOpenModal1}
                    closeModal={closeModal1}
                >
                    <h2 className='modalH2'>DELETING ADVERTISEMENT</h2>
                    <h3 className='modalH3'>
                        Are you sure you want to delete this ad?
                    </h3>
                    <Button onClick={openModals2}>Yes</Button>
                    <Button onClick={closeModal1}>No</Button>
                </Modal>
                <Modal
                    name='modal2'
                    isOpen={isOpenModal2}
                    closeModal={closeModal2}
                >
                    <h2>DELETING ADVERTISEMENT</h2>
                    <h3>Are you REALLY sure you want to delete this ad?</h3>
                    <p>This action will permanently delete your ad!!</p>
                    <Button onClick={handleDelete}>Yes</Button>
                    <Button onClick={closeModal2}>No</Button>
                </Modal>
                <Modal
                    name='modal3'
                    isOpen={isOpenModal3}
                    closeModal={closeModal3}
                >
                    <h2 className='modal-h2'>ADVERTISEMENT DELETED</h2>
                    <h3 className='modal-h3'>(I told you...)</h3>
                    <Button onClick={closeModals3}>Ok</Button>
                </Modal>
                <Advert {...advert} />
                <div className='userButtons'>
                    <div className='editAnddeleteButton'>
                        <Button
                            id='deleteAdd'
                            className='buttons'
                            onClick={openModal1}
                        >
                            Delete Ad
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdvertPage;
