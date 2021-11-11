import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { name, comment } = props.review;

    return (
        <Col>
            <Card className="h-100 rounded-3 border-0 review-card">
                <Card.Header>Review [icon]</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {comment}{' '}
                        </p>
                        <footer className="blockquote-footer review-name">
                            {name}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;