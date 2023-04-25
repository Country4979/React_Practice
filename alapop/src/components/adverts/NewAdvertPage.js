import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import { createNewAdvert, getTagList } from './service';
import axios from 'axios';

const NewAdvertPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [tagsList, setTagsList] = useState([]);

    const [name, setName] = useState('');
    const [sale, setSale] = useState(true);
    const [price, setPrice] = useState('');
    const [tags, setTags] = useState([]);

    const [data, setData] = useState({
        name: '',
        sale: true,
        tags: [],
        photo: '',
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
        const priceNumber = parseInt(event.target.value);
        setPrice(priceNumber);
        setData({ ...data, price: priceNumber });
        console.log(price);
    };

    const handleChangeTags = () => {
        const tags = [document.getElementById('selectedTags').value];
        setData({ ...data, tags: tags });
        console.log(tags.length)
    };

    const handleChangePhoto = (event) => {
        setData({ ...data, photo: event });
    };

    useEffect(() => {
        setIsLoading(true);
        getTagList().then((tags) => setTagsList(tags));
        setIsLoading(false);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const datas = new FormData();
        try {
            setIsLoading(true);

            datas.append('name', data.name);
            datas.append('sale', data.sale);
            datas.append('price', data.price);
            datas.append('tags', data.tags);
            datas.append('photo', data.photo);

            const advert = await createNewAdvert(datas);
            /*{
                name: data.name,
                sale: data.sale,
                price: data.price,
                tags: data.tags,
                photo: data.photo,
            });*/
            setIsLoading(false);
            navigate(`/adverts/${advert.id}`);
        } catch (error) {
            if (error.status === 401) {
                navigate('/login');
            } else {
                console.log(error);
                return alert('error!!!');
            }
        }
    };

    console.log(tags.length)
    const isDisabled = isLoading || name.length <= 0 || price.length <= 0 || tags.length === 0;

    return (
        <>
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
                        //placeholder='Product name'
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
                        <select id='selectedTags' onChange={handleChangeTags}>
                            <option value={tagsList[0]}>{tagsList[0]}</option>
                            <option value={tagsList[1]}>{tagsList[1]}</option>
                            <option value={tagsList[2]}>{tagsList[2]}</option>
                            <option value={tagsList[3]}>{tagsList[3]}</option>
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
                            type='tel'
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
        </>
    );
};

export default NewAdvertPage;
