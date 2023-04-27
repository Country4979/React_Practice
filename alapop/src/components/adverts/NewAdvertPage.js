import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import { createNewAdvert, getTagList } from './service';
import { UseModal } from '../modals/UseModal';
import Modal from '../modals/Modal';

const NewAdvertPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenModalError, openModalError, closeModalError] = UseModal(false);
    const [isOpenModalErrorLogin, openModalErrorLogin, closeModalErrorLogin] =
        UseModal(false);
    const [tagsList, setTagsList] = useState([]);

    const [name, setName] = useState('');
    const [sale, setSale] = useState(true);
    const [price, setPrice] = useState('');
    const [tags, setTags] = useState([]);

    const [data, setData] = useState({
        name: '',
        sale: true,
        tags: [],
    });

    const handleChangeName = (event) => {
        const nameCharacter = event.target.value;
        setName(nameCharacter);
        setData({ ...data, name: nameCharacter });
    };

    const handleChangeSale = () => {
        const sale = document.getElementById('addSelect').value;
        setData({ ...data, sale: sale });
        console.log(sale);
    };

    const handleChangePrice = (event) => {
        const priceNumber = event.target.value;
        setPrice(priceNumber);
        setData({ ...data, price: priceNumber });
    };

    const handleChangeTags = (event) => {
        const tags = event.target.value;
        setData({ ...data, tags: tags });
    };

    const handleChangePhoto = (event) => {
        setData({ ...data, photo: event });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const datas = new FormData();
        try {
            setIsLoading(true);

            datas.append('name', data.name);
            datas.append('sale', data.sale);
            datas.append('price', data.price);
            datas.append('tags', data.tags);
            if (!!data.photo) {
                datas.append('photo', data.photo);
            }

            const advert = await createNewAdvert(datas);
            setIsLoading(false);
            navigate(`/adverts/${advert.id}`);
        } catch (error) {
            if (error.status === 401) {
                openModalErrorLogin();
                setTimeout(() => navigate('/login'), 3000);
                return (
                    <Modal
                        name='errorLogin'
                        isOpen={isOpenModalErrorLogin}
                        closeModal={closeModalErrorLogin}
                    >
                        <h2>You must be logged in to create ads</h2>
                        <p className='small'>You will be redirected</p>
                    </Modal>
                );
            } else {
                openModalError();
                return (
                    <Modal
                        name='error'
                        isOpen={isOpenModalError}
                        closeModal={closeModalError}
                    >
                        <h3>
                            An error occurred while creating the advertisement.
                        </h3>
                        <Button onClick={closeModalError}>
                            Please try again.
                        </Button>
                    </Modal>
                );
            }
        }
    };

    console.log(data.photo);
    const isDisabled =
        isLoading ||
        name.length <= 0 ||
        price.length <= 0 ||
        data.tags.length === 0;

    useEffect(() => {
        setIsLoading(true);
        getTagList().then((tags) => setTagsList(tags));
        setIsLoading(false);
    }, []);

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
                <div className='createAddForm'>
                    <h1>
                        Do you want to buy somthing?
                        <br />
                        To sell something, maybe?
                    </h1>

                    <form
                        id='createAddForm'
                        onSubmit={handleSubmit}
                        encType='multipart/form-data'
                    >
                        <label htmlFor='addName' className='tittle'>
                            Name:
                        </label>
                        <input
                            type='text'
                            id='addName'
                            name='addName'
                            size='25'
                            value={name}
                            onChange={handleChangeName}
                            required
                        />
                        <br />
                        <label htmlFor='addPhoto' className='tittle'>
                            Photo:
                        </label>
                        <input
                            content-type='multipart/form-data'
                            type='file'
                            id='addPhoto'
                            name='addPhoto'
                            onChange={(event) =>
                                handleChangePhoto(event.target.files[0])
                            }
                        />
                        <br />
                        <div className='tags'>
                            <label htmlFor='addTag' className='labels'>
                                Available tags:
                            </label>
                            <select
                                id='selectedTags'
                                onChange={handleChangeTags}
                            >
                                <option value={tagsList[0]}>
                                    {tagsList[0]}
                                </option>
                                <option value={tagsList[1]}>
                                    {tagsList[1]}
                                </option>
                                <option value={tagsList[2]}>
                                    {tagsList[2]}
                                </option>
                                <option value={tagsList[3]}>
                                    {tagsList[3]}
                                </option>
                            </select>
                        </div>

                        <label htmlFor='addSelect' className='tittle'>
                            This article is :
                        </label>
                        <select
                            name='addSelect'
                            id='addSelect'
                            onChange={handleChangeSale}
                            required
                        >
                            <option value={true}>FOR SALE</option>
                            <option value={false}>FOR PURCHASE</option>
                        </select>
                        <label htmlFor='addPrice' className='tittle'>
                            por:
                        </label>
                        <br />
                        <h2 className='productData'>
                            <input
                                className='inputPrice'
                                type='number'
                                id='addPrice'
                                name='addPrice'
                                minLength='1'
                                size='5'
                                placeholder='Price'
                                onChange={handleChangePrice}
                                value={price}
                                required
                            />{' '}
                            €
                        </h2>
                        <div className='buttonsArea'>
                            <Button
                                type='submit'
                                id='submit'
                                className='buttons'
                                variant='primary'
                                onClick={handleSubmit}
                                disabled={isDisabled}
                            >
                                Create Advert
                            </Button>
                            <Button
                                type='reset'
                                id='resetButton'
                                className='buttons'
                                variant='primary'
                            >
                                Reset info
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default NewAdvertPage;
