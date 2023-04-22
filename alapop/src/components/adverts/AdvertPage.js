import { useParams, useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteAdvert, getAdvert } from './service';
import Advert from './Advert';

const AdvertPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [advert, setAdvert] = useState([]);
    const [error, setError] = useState(null);

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
        deleteAdvert(params.id).then(() =>
            setTimeout(() => {
                navigate('/adverts');
            }, 3000)
        );
        return <div>This advertisement has been deleted</div>;
    };

    return (
        <>
            <h1>Advertisement Detail</h1>

            <div className='add'>
                <Advert {...advert} />
                <div className='userButtons'>
                    <div className='editAnddeleteButton'>
                        <Button
                            id='deleteAdd'
                            className='buttons'
                            onClick={handleDelete}
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
