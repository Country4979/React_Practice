import { useEffect, useState } from 'react';
import { getLastAdv } from './service';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import Advert from './Advert';
import './AdvertsPage.css';

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
    const [select, setSelect] = useState('');

    useEffect(() => {
        setIsLoading(true);

        getLastAdv().then((adverts) => setAdverts(adverts));

        setIsLoading(false);
    }, []);

    const filteredAdverts = adverts.filter(
        (advert) =>
            advert.name.toUpperCase().startsWith(query.toLocaleUpperCase())
        //.filter((advert) => advert.sale)
    );

    return (
        <>
            {isLoading ? (
                <div>Loading...INTENTAR PONER SPINNER</div>
            ) : (
                <div>
                    {!!adverts.length ? (
                        <>
                            <div className='filterArea'>
                                <div>
                                    <h1>Searching Area</h1>
                                </div>
                                <div className='lefttSide'>
                                    <label htmlFor='filterByName'>
                                        By name: {''}
                                    </label>
                                    <label htmlFor='filterBySale'>
                                        Is : {''}
                                    </label>
                                </div>
                                <div className='rightSide'>
                                    <input
                                        name='filterByName'
                                        type='text'
                                        style={{ borderWidth: 1 }}
                                        value={query}
                                        onChange={(event) =>
                                            setQuery(event.target.value)
                                        }
                                    />
                                    <select
                                        name='filterBySale'
                                        value={select}
                                        onChange={(event) =>
                                            setSelect(event.target.value)
                                        }
                                    >
                                        <option value='false'>for Sale</option>
                                        <option value='true'>buying</option>
                                        <option value='false&true'>All</option>
                                    </select>
                                </div>
                            </div>
                            <ul>
                                {filteredAdverts.map((advert) => (
                                    <li key={advert.id}>
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
