import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get('http://localhost:5000/api/movies');
            setMovies(data);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Movie Metadata Aggregator</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.plot}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
