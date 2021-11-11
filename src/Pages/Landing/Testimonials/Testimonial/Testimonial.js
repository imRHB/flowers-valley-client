import { faQuoteLeft, faQuoteRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Testimonial.css';

const userIcon = <FontAwesomeIcon icon={faUser} />;
// const quoteLeftIcon = <FontAwesomeIcon icon={faQuoteLeft} />;
// const quoteRighttIcon = <FontAwesomeIcon icon={faQuoteRight} />;

const Testimonial = (props) => {
    const { name, comment } = props.review;

    return (
        <Col>
            <Card className="h-100 p-5 border-0 rounded-3 testimonial-card">
                <div className="d-flex align-items-center">
                    <div>
                        {/* <img src="" alt="" style={{ width: '64px', height: '64px' }} className="mx-auto" /> */}
                        <Card.Title><span className="fw-bold">{userIcon}</span></Card.Title>
                    </div>

                    <div className="ms-3">
                        <Card.Title><span className="fw-bold">{name}</span></Card.Title>
                    </div>
                </div>

                <Card.Body className="p-0">
                    <Card.Text className="my-4">
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Testimonial;