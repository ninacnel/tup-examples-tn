import { useState } from "react";
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

const MovieFilter = ({ movies, onFilter }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    const text = e.target.value;
    setFilterText(text);
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
    onFilter(filteredMovies);
  };

  return (
    <Form.Control
      type="text"
      placeholder="Search by movie title"
      value={filterText}
      onChange={handleFilterChange}
    />
  );
};

MovieFilter.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string,
        cast: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number,
        genre: PropTypes.string,
        synopsis: PropTypes.string,
        poster: PropTypes.string,
        available: PropTypes.bool,
        watchOn: PropTypes.string,
      })
    ).isRequired,
    onFilter: PropTypes.func.isRequired,
  };

export default MovieFilter;