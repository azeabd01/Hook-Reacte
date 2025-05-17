import React from 'react';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
    return (
        <Row>
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </Row>
    );
}

export default MovieList;
