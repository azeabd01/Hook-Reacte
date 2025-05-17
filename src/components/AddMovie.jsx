import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function AddMovie({ onAdd }) {
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: ''
    });

    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newMovie.title || !newMovie.rating) return;
        onAdd({ ...newMovie, rating: parseFloat(newMovie.rating) });
        setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <Row>
                <Col md={3}>
                    <Form.Control
                        name="title"
                        placeholder="Title"
                        value={newMovie.title}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={3}>
                    <Form.Control
                        name="description"
                        placeholder="Description"
                        value={newMovie.description}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={3}>
                    <Form.Control
                        name="posterURL"
                        placeholder="Poster URL"
                        value={newMovie.posterURL}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={2}>
                    <Form.Control
                        name="rating"
                        type="number"
                        placeholder="Rating"
                        value={newMovie.rating}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        step="0.1"
                    />
                </Col>
                <Col md={1}>
                    <Button type="submit" variant="primary">Add</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default AddMovie;
