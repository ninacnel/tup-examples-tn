import { Button, Col, Container, Row } from "react-bootstrap";
import MovieItem from "../movieItem/MovieItem";
import { allMovies } from "../../data/data";
import { useState } from "react";
import MovieForm from "../movieForm/MovieForm";

const Movies = () => {
  const [movies, setMovies] = useState(allMovies);
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm((prevValue) => !prevValue);
  };

  const addMovieHandler = (newMovie) => {
    setMovies((movies) => [...movies, newMovie]);
    setShowForm((prevValue) => !prevValue);
  };

  return (
    <Container>
      <Button onClick={showFormHandler}>Create new movie</Button>
      {showForm && (
        <MovieForm onAddNewMovie={addMovieHandler} />
      )}
      <Row className="justify-content-center">
        {movies.map((movie, index) => (
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
    </Container>
  );
};

export default Movies;