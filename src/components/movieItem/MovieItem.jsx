import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const MovieItem = ({ title, director, cast, duration, genre, synopsis, poster, watchOn }) => {
  return (
<Card className="movie-item" style={{ width: '18rem' }}>
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
  watchOn: PropTypes.string.isRequired,
};

export default MovieItem;