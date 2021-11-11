import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Testimonials</h2>
            <Container>
                <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;