import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [cast, setCast] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setGenre] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [poster, setPoster] = useState('');
    const [available, setAvailable] = useState(true);
    const [watchOn, setWatchOn] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {
            title,
            director,
            cast: cast.split(',').map(name => name.trim()), // Convert cast to an array
            duration: parseInt(duration, 10),
            genre,
            synopsis,
            poster,
            available,
            watchOn,
        };
        console.log('Movie created:', movie);
        // Add your submit logic here (e.g., send the movie data to an API)
    };

    return (
        <Form onSubmit={handleSubmit}className="m-3 p-2 bg-info rounded">
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter movie title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formDirector">
                <Form.Label>Director</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter director name" 
                    value={director} 
                    onChange={(e) => setDirector(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formCast">
                <Form.Label>Cast</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter cast names separated by commas" 
                    value={cast} 
                    onChange={(e) => setCast(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formDuration">
                <Form.Label>Duration (in minutes)</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter movie duration" 
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter movie genre" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formSynopsis">
                <Form.Label>Synopsis</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Enter movie synopsis" 
                    value={synopsis} 
                    onChange={(e) => setSynopsis(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formPoster">
                <Form.Label>Poster URL</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter poster URL" 
                    value={poster} 
                    onChange={(e) => setPoster(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formAvailable">
                <Form.Label>Available</Form.Label>
                <Form.Check 
                    type="checkbox" 
                    label="Is this movie available?" 
                    checked={available} 
                    onChange={(e) => setAvailable(e.target.checked)} 
                />
            </Form.Group>

            <Form.Group controlId="formWatchOn">
                <Form.Label>Watch On</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter platform (e.g., Netflix)" 
                    value={watchOn} 
                    onChange={(e) => setWatchOn(e.target.value)} 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Create Movie
            </Button>
        </Form>
    );
};

export default MovieForm