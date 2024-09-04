import { Button, Col, Container, Row } from "react-bootstrap";
import MovieItem from "../movieItem/MovieItem";
import { allMovies } from "../../data/data";
import { useState } from "react";
import MovieForm from "../movieForm/MovieForm";
import MovieFilter from "../movieFilter/MovieFilter";

const Movies = () => {
  const [movies, setMovies] = useState(allMovies);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm((prevValue) => !prevValue);
  };

  const addMovieHandler = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
    setShowForm(false);
  };

  const handleFilter = (filteredMovies) => {
    setFilteredMovies(filteredMovies);
  };

  return (
    <Container>
      <Row className="mb-4 mt-2">
        <Col xs={12}>
          <MovieFilter movies={movies} onFilter={handleFilter} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        {filteredMovies.map((movie, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <MovieItem
              title={movie.title}
              director={movie.director}
              cast={movie.cast}
              duration={movie.duration}
              genre={movie.genre}
              synopsis={movie.synopsis}
              poster={movie.poster}
              available={movie.available}
              watchOn={movie.watchOn}
            />
          </Col>
        ))}
      </Row>
      <Button onClick={showFormHandler}>Create new movie</Button>
      {showForm && <MovieForm onAddNewMovie={addMovieHandler} />}
    </Container>
  );
};

export default Movies;