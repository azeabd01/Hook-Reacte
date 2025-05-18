import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function MovieDetails({ movies }) {
    const { title } = useParams();
    const movie = movies.find(m => m.title === title);

    if (!movie) return <h2>Film non trouvé</h2>;

    return (
        <div>
            <h2 className="text-center mb-4">{movie.title}</h2>
            <p className="text-center">{movie.description}</p>
            <div className="d-flex justify-content-center mb-4">
                <img src={movie.posterURL} alt={movie.title} style={{ maxHeight: '400px' }} />
            </div>
            <div className="text-center mb-4">
                <strong>Note :</strong> {movie.rating} ⭐
            </div>
            <div className="text-center mb-4">
                <iframe
                    width="560"
                    height="315"
                    src={movie.videoURL}  
                    title={`${movie.title} trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text-center">
                <Link to="/">
                    <Button variant="light">← Retour à l'accueil</Button>
                </Link>
            </div>
        </div>
    );
}

export default MovieDetails;
