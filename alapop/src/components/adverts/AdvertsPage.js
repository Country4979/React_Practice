import { useEffect, useState } from 'react';
import { getLastAdv } from './service';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import Advert from './Advert'

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
                
        <p>Sorry, no adverts yet.</p>
        <Button as={Link} to="/adverts/new" variant="primary">Be the first to publish one...</Button>
                
    </div>
);

const AdvertsPage = (advert) => {
    const [isLoading, setIsLoading] = useState(true)
    const [advs, setAdv] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getLastAdv().then(advs => setAdv(advs));

        setIsLoading(false)
    },[]);

    return (
        <>
        {isLoading ? (
            <di>Loading...INTENTAR PONER SPINNER</di>
        ) : (
        <div>
        {!!advs.length ? (
            <ul>
                {advs.map(adv =>(
                <li key={adv.id}>
                    <Link to={`/adverts/${adv.id}`}>
                        {/*<Advert {...advert} />*/}
                    </Link>
                </li>
                ))};
            </ul>
            ):(
                <EmptyList />
            )
        }
        </div>    
        )
        }
        </>
    )
};    

export default AdvertsPage