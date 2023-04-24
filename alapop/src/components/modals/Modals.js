import Button from '../shared/Button';
import Modal from './Modal';
import { UseModal } from './UseModal';
import { useNavigate } from 'react-router-dom';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
    const [isOpenModal2, openModal2, closeModal2] = UseModal(false);
    const [isOpenModal3, openModal3, closeModal3] = UseModal(false);

    const navigate = useNavigate();

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

    return (
        <>
            <Modal name='modal1' isOpen={isOpenModal1} closeModal={closeModal1}>
                <h2 className='modalH2'>DELETING ADVERTISEMENT</h2>
                <h3 className='modalH3'>
                    Are you sure you want to delete this ad?
                </h3>
                <Button>Yes</Button>
                <Button>No</Button>
            </Modal>
            <Modal name='modal2' isOpen={isOpenModal2} closeModal={closeModal2}>
                <h2>DELETING ADVERTISEMENT</h2>
                <h3>Are you sure you REALLY want to delete this ad?</h3>
                <p>This action will permanently delete your ad!!</p>
                <Button>Yes</Button>
                <Button>No</Button>
            </Modal>
            <Modal name='modal3' isOpen={isOpenModal3} closeModal={closeModal3}>
                <h2 className='modal-h2'>ADVERTISEMENT DELETED</h2>
                <h3 className='modal-h3'>(I told you...)</h3>
                <Button onClick={closeModals3}>Ok</Button>
            </Modal>
        </>
    );
};

export default Modals;
