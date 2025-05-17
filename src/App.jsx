import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './index.css';

const initialMovies = [
  {
    title: 'The Dark Knight',
    description: 'Batman battles the Joker to save Gotham City.',
    posterURL: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    rating: 9.0
  },
  {
    title: 'Breaking Bad',
    description: 'A chemistry teacher turns to a life of crime after a cancer diagnosis.',
    posterURL: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    rating: 9.5
  },
  {
    title: 'The Matrix',
    description: 'A hacker discovers the shocking truth about reality.',
    posterURL: 'https://preview.redd.it/the-matrix-opened-25-years-ago-this-week-the-critically-v0-53b7y66oenqc1.jpeg?width=640&crop=smart&auto=webp&s=c4a46d51552e2716b36f4562f659812cb31dc9b8',
    rating: 8.7
  },
  {
    title: 'Stranger Things',
    description: 'A group of kids face supernatural threats in their town.',
    posterURL: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    rating: 8.9
  }
];

function App() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : initialMovies;
  });

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= parseFloat(ratingFilter || 0)
  );

  return (
    <Container className="min-vh-100 py-5 bg-dark text-white">
      <h1 className="text-center mb-4">🎬 My Movie Library</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />
      <AddMovie onAdd={(movie) => setMovies([...movies, movie])} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
}

export default App;
