import MovieItem from "../movieItem/MovieItem";

const movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
        duration: 148,
        genre: "Science Fiction",
        synopsis: "A skilled thief is offered a chance to have his criminal history erased as payment for implanting another person's idea into a target's subconscious.",
        poster: "https://example.com/inception.jpg",
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
        poster: "https://example.com/shawshank-redemption.jpg",
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
        poster: "https://example.com/the-godfather.jpg",
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
        poster: "https://example.com/the-dark-knight.jpg",
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
        poster: "https://example.com/pulp-fiction.jpg",
        available: true,
        watchOn: "amazon",
    }
];

const Movies = () => {
    return (
      <div className="movies-list">
        {movies.map((movie, index) => (
          <MovieItem
            key={index}
            title={movie.title}
            director={movie.director}
            cast={movie.cast}
            duration={movie.duration}
            genre={movie.genre}
            synopsis={movie.synopsis}
            poster={movie.poster}
            watchOn={movie.watchOn}
          />
        ))}
      </div>
    );
  };

  export default Movies;