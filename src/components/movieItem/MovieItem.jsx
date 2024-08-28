import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const MovieItem = ({ title, director, cast, duration, genre, synopsis, poster, watchOn, available }) => {
    const [isAvailable, setIsAvailable] = useState(available);

    const changeAvailableHandler = () => {
        setIsAvailable((prev)=>!prev)
    };

    return (
        <Card className="movie-item shadow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={poster} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <strong>Director:</strong> {director}
                </Card.Text>
                <Card.Text>
                    <strong>Cast:</strong> {cast.join(', ')}
                </Card.Text>
                <Card.Text>
                    <strong>Duration:</strong> {duration} minutes
                </Card.Text>
                <Card.Text>
                    <strong>Genre:</strong> {genre}
                </Card.Text>
                <Card.Text>
                    <strong>Synopsis:</strong> {synopsis}
                </Card.Text>
                <Card.Text>
                    <strong>{isAvailable ?'Available' : 'Not available'}</strong>
                    <Button onClick={changeAvailableHandler}>Change</Button>
                </Card.Text>
                <Card.Text>
                    <strong>Available on:</strong> {watchOn}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    cast: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    available : PropTypes.bool.isRequired,
    watchOn: PropTypes.string.isRequired,
};

export default MovieItem;