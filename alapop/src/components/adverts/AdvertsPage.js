import '../shared/loading.css'
import '../shared/spinner.css';
import './AdvertsPage.css';
import { useEffect, useState } from 'react';
import { getLastAdv } from './service';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import Advert from './Advert';

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
        <p>Sorry, no adverts yet.</p>
        <Button as={Link} to='/adverts/new' variant='primary'>
            Be the first to publish one...
        </Button>
    </div>
);

const AdvertsPage = (advert) => {
    const [isLoading, setIsLoading] = useState(true);
    const [adverts, setAdverts] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState({
        lifestyle: false,
        motor: false,
        mobile: false,
        work: false,
    });
    const [queryprice, setQueryPrice] = useState({
        lower: '',
        upper: '',
    });
    //const [dataFiltered, setDataFiltered] = useState([]);
    const [select, setSelect] = useState(false);

    const filteredAdverts = adverts
        .filter((advert) =>
            advert.name.toUpperCase().startsWith(query.toLocaleUpperCase())
        )
        .filter((advert) => {
            const other = () => {
                if (advert.sale === false) {
                    return false;
                } else {
                    return false && true;
                }
            };
            if (advert.sale) {
                return true;
            } else {
                other();
            }
        });

    const handleFiltetrByPrice = (event) => {
        setQueryPrice({
            ...queryprice,
            [event.target.name]: event.target.value,
        });
    };
    //);
    /*SELECT FOR SALE*/

    /* CHECKBOX TAGS --> NO ME FUCIONAN
    const handleCheckBox = (event) => {
        setSelectedTags({
            ...selectedTags,
            [event.target.value]: event.target.checked,
        });
        if (event.target.checked) {
            const resultTags = filteredAdverts.filter(
                (advert) => advert.tags === event.target.value
                );
            setDataFiltered([...dataFiltered, ...resultTags]);
        } else {
            const resultTags = dataFiltered.filter(
                (advert) => advert.tags !== event.target.value
            );
            setDataFiltered([...resultTags]);
        }
    };*/

    //console.log(selectedTags);

    useEffect(() => {
        try {
            getLastAdv().then((adverts) => {
                setIsLoading(true);
                setAdverts(adverts);
                setIsLoading(false);
            });
        } catch (error) {}
    }, [isLoading]);
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
                <div>
                    <div className='filterArea'>
                        <div>
                            <h1>Searching Area</h1>
                        </div>
                        <div className='lefttSide'>
                            <label htmlFor='filterByName'>By name: {''}</label>
                            <input
                                name='filterByName'
                                type='text'
                                style={{ borderWidth: 1 }}
                                value={query}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                            />
                        </div>
                        <div className='rightSide'>
                            <label htmlFor='filterByTag'>Tags : {''}</label>
                            <input
                                type='checkbox'
                                id='lifestyle'
                                name='tags'
                                value='lifestyle'
                                onChange={(event) =>
                                    setSelectedTags(event.target.value)
                                }
                            />
                            <label htmlFor='lifestyle'>Lifestyle</label>
                            <input
                                type='checkbox'
                                id='motor'
                                name='tags'
                                value='motor'
                                onChange={(event) =>
                                    setSelectedTags(event.target.value)
                                }
                            />
                            <label htmlFor='motor'>Motor</label>
                            <input
                                type='checkbox'
                                id='mobile'
                                name='tags'
                                value='mobile'
                                onChange={(event) =>
                                    setSelectedTags(event.target.value)
                                }
                            />
                            <label htmlFor='mobile'>Mobile</label>
                            <input
                                type='checkbox'
                                id='work'
                                name='tags'
                                value='work'
                                onChange={(event) =>
                                    setSelectedTags(event.target.value)
                                }
                            />
                            <label htmlFor='work'>Work</label>

                            <select
                                name='filterBySale'
                                value={select}
                                onChange={(event) =>
                                    setSelect(event.target.value)
                                }
                            >
                                <option value={true}>for Sale</option>
                                <option value={false}>buying</option>
                                <option value={null}>All</option>
                            </select>

                            <label htmlFor='filterByPrice'>
                                By price: {''}
                            </label>
                            <input
                                name='lower'
                                type='text'
                                placeholder='Min'
                                style={{ borderWidth: 1 }}
                                value={queryprice}
                                onChange={handleFiltetrByPrice}
                            />
                            <input
                                name='upper'
                                type='text'
                                placeholder='Max'
                                style={{ borderWidth: 1 }}
                                value={queryprice}
                                onChange={handleFiltetrByPrice}
                            />
                        </div>
                    </div>
                    {!!adverts.length && filteredAdverts.length ? (
                        //(
                        <>
                            <ul>
                                {filteredAdverts.map((advert) => (
                                    <li key={advert.id} className='productInfo'>
                                        <Link to={`/adverts/${advert.id}`}>
                                            {<Advert {...advert} />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <EmptyList />
                    )}
                </div>
            )}
        </>
    );
};

export default AdvertsPage;
