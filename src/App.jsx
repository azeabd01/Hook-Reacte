import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';  // <-- ici
import initialMovies from './data/initialMovies';
import './index.css';

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem('movies');
    return saved ? JSON.parse(saved) : initialMovies;
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
    <Router>
      <Container className="min-vh-100 py-5 bg-dark text-white">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="text-center mb-4">🎬 My Movie Library</h1>
              <Filter
                titleFilter={titleFilter}
                ratingFilter={ratingFilter}
                onTitleChange={setTitleFilter}
                onRatingChange={setRatingFilter}
              />
              <AddMovie onAdd={(movie) => setMovies([...movies, movie])} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />  {/* <-- ici */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
