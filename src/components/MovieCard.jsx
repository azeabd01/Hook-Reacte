import React from 'react';
import { Card, Col } from 'react-bootstrap';

function MovieCard({ movie }) {
    return (
        <Col md={3} className="mb-4">
            <Card
                className="h-100 shadow-sm border-0 movie-card"
                style={{ transition: 'transform 0.3s ease' }}
            >
                <Card.Img
                    variant="top"
                    src={movie.posterURL}
                    style={{ height: '350px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-center text-primary">{movie.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                        {movie.description}
                    </Card.Text>
                    <Card.Text className="text-end">
                        ⭐ <strong>{movie.rating}</strong>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default MovieCard;
