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
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getLastAdv().then((adverts) => setAdverts(adverts));

    setIsLoading(false);
  }, []);

  const filteredAdverts = adverts.filter((advert) =>
    advert.name.toUpperCase().startsWith(query.toLocaleUpperCase())
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
                <label>
                  Search by name: {''}
                  <input
                    type='text'
                    style={{ borderWidth: 1 }}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </label>
              </div>
              <ul>
                {filteredAdverts.map((advert) => (
                  <li key={advert.id}>
                    <Link to={`/adverts/${advert.id}`}>
                      {<Advert {...advert} />}
                    </Link>
                  </li>
                ))}
                ;
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
