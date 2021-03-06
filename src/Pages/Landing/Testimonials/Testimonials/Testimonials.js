import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://quiet-peak-91569.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="bg-light py-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Testimonials</h2>
            <Container>
                <Row xs={1} md={2} lg={3} xl={3} className="g-5 g-lg-4 g-xl-5">
                    {
                        reviews.map(review => <Testimonial
                            key={review._id}
                            review={review}
                        ></Testimonial>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;