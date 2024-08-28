import { Col, Container, Row } from "react-bootstrap";
import MovieItem from "../movieItem/MovieItem";

const movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
        duration: 148,
        genre: "Science Fiction",
        synopsis: "A skilled thief is offered a chance to have his criminal history erased as payment for implanting another person's idea into a target's subconscious.",
        poster: "https://i.pinimg.com/564x/43/9a/1c/439a1c4583a953c26b63d08a1d832f53.jpg",
        available: true,
        watchOn: "netflix", 
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
        duration: 142,
        genre: "Drama",
        synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://i.pinimg.com/564x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg",
        available: true,
        watchOn: "hbo", 
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
        duration: 175,
        genre: "Crime",
        synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster: "https://i.pinimg.com/564x/11/99/dc/1199dc6273680f175fd9b06c9c36d08a.jpg",
        available: true,
        watchOn: "paramount",
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
        duration: 152,
        genre: "Action",
        synopsis: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        poster: "https://i.pinimg.com/564x/ea/a2/6e/eaa26e2c3bfa234c3cdd3c4d9fabad35.jpg",
        available: true,
        watchOn: "hbo", 
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
        duration: 154,
        genre: "Crime",
        synopsis: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        poster: "https://i.pinimg.com/564x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg",
        available: true,
        watchOn: "amazon",
    }
];

const Movies = () => {
    return (
        <Container>
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