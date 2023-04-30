import '../shared/loading.css';
import '../shared/spinner.css';
import './AdvertsPage.css';
import { useEffect, useState } from 'react';
import { getLastAdv } from './service';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import Advert from './Advert';

const EmptyList = ({ dataFiltered }) => {
    console.log(dataFiltered);
    return dataFiltered ? (
        <div style={{ textAlign: 'center' }}>
            <p>Sorry, no adverts yet.</p>
            <Button as={Link} to='/adverts/new'>
                Be the first to publish one...
            </Button>
        </div>
    ) : (
        <div style={{ textAlign: 'center' }}>
            <p>Sorry, your search returned no results</p>
            <Button as={Link} to='/'>
                Go Back...
            </Button>
        </div>
    );
};

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
    const [dataFiltered, setDataFiltered] = useState([]);
    const [querySale, setQuerySale] = useState('');
    const [maxPrice, setQueryMaxPrice] = useState(Infinity);
    const [minPrice, setQueryMinPrice] = useState(-Infinity);

    /*FILTER BY SALE --> NO FUNCIONA */
    const handleChangeSale = (event) => {
        setQuerySale(event.target.value);
        console.log(event.target.value);
    };

    let filteredAdverts = adverts.filter((advert) =>
        advert.name.toUpperCase().startsWith(query.toLocaleUpperCase())
    );

    /*FILTER BY PRICE*/
    if ((minPrice || maxPrice) && Number(minPrice) < Number(maxPrice)) {
        filteredAdverts = filteredAdverts.filter(
            (advert) => advert.price >= minPrice && advert.price <= maxPrice
        );
    }
    /* -- */
    /*FILTER BY SALE --> NO FUNCIONA */
    /*.filter( advert => {
        if (querySale === "") {
          return true;
        }
        return advert.sale ? querySale === "true" : querySale === "false";
      })*/

    useEffect(() => {
        try {
            filteredAdverts === 0
                ? setDataFiltered(true)
                : setDataFiltered(false);
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
                        {/*FILTER BY NAME*/}
                        <div className='filters'>
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

                        {/*FILTER BY TAGS*/}
                        <div className='filters'>
                            <label htmlFor='filterByTag'>Tags : {''}</label>
                            <input
                                type='checkbox'
                                id='lifestyle'
                                name='tags'
                                value='lifestyle'
                            />
                            <label htmlFor='lifestyle'>Lifestyle</label>
                            <input
                                type='checkbox'
                                id='motor'
                                name='tags'
                                value='motor'
                            />
                            <label htmlFor='motor'>Motor</label>
                            <input
                                type='checkbox'
                                id='mobile'
                                name='tags'
                                value='mobile'
                            />
                            <label htmlFor='mobile'>Mobile</label>
                            <input
                                type='checkbox'
                                id='work'
                                name='tags'
                                value='work'
                            />
                            <label htmlFor='work'>Work</label>
                        </div>

                        {/*FILTER BY SALE*/}
                        <div className='filters'>
                            <label htmlFor='filterBySale'>For Sale?</label>
                            <select
                                name='filterBySale'
                                value='selected'
                                onChange={handleChangeSale}
                            >
                                <option value={true}>Sale</option>
                                <option value={false}>Buying</option>
                                <option value={null}>All</option>
                            </select>
                        </div>

                        {/*FILTER BY PRICE*/}
                        <div className='filters'>
                            <label htmlFor='filterByPrice'>
                                By price: {''}
                            </label>
                            <input
                                name='minPrice'
                                type='number'
                                placeholder='Min'
                                value={minPrice}
                                onChange={(event) =>
                                    setQueryMinPrice(event.target.value)
                                }
                                className='numberInputs'
                            />
                            <input
                                name='maxPrice'
                                type='number'
                                placeholder='Max'
                                value={maxPrice}
                                onChange={(event) =>
                                    setQueryMaxPrice(event.target.value)
                                }
                                className='numberInputs'
                            />
                        </div>
                    </div>
                    {!!adverts.length && filteredAdverts.length ? (
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
                        <EmptyList dataFiltered={dataFiltered} />
                    )}
                </div>
            )}
        </>
    );
};

export default AdvertsPage;
