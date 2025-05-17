import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

function Filter({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) {
    return (
        <Row className="mb-4">
            <Col md={6}>
                <Form.Control
                    type="text"
                    placeholder="Search by title"
                    value={titleFilter}
                    onChange={(e) => onTitleChange(e.target.value)}
                />
            </Col>
            <Col md={6}>
                <Form.Control
                    type="number"
                    placeholder="Minimum rating"
                    value={ratingFilter}
                    onChange={(e) => onRatingChange(e.target.value)}
                    min="0"
                    max="10"
                />
            </Col>
        </Row>
    );
}

export default Filter;
