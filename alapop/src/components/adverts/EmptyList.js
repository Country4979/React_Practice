import { Link } from "react-router-dom";
import Button from "../shared/Button";

const EmptyList = ({ dataFiltered }) => {

    return (
        <div style={{ textAlign: 'center' }}>
            {dataFiltered ? (
                <>
                    <p>Sorry, no adverts yet.</p>
                    <Button as={Link} to='/adverts/new' variant='primary'>
                        Be the first to publish one...
                    </Button>
                </>
            ) : (
                <>
                    <p>Sorry, your search returned no results.</p>
                    <Button as={Link} to='/adverts' variant='primary'>
                        Try again...
                    </Button>
                </>
            )}
        </div>
    );
};
export default EmptyList;
