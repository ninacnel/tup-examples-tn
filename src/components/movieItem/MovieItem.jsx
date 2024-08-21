import PropTypes from 'prop-types';

const MovieItem = ({ title, director, cast, duration, genre, synopsis, poster, watchOn }) => {
  return (
    <div className="movie-item">
      <img src={poster} alt={title} className="movie-poster" />
      <h2>{title}</h2>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Cast:</strong> {cast.join(', ')}</p>
      <p><strong>Duration:</strong> {duration} minutes</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Synopsis:</strong> {synopsis}</p>
      <p><strong>Available on:</strong> {watchOn}</p>
    </div>
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