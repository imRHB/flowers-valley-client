import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RoseBouquet.css';

const RoseBouquet = (props) => {
    const { _id, title, img, description, price } = props.bouquet;

    return (
        <Col>
            <Card className="h-100 rounded-3 text-center bouquet-card">
                <Card.Img variant="top" src={img} style={{ width: '75%', margin: '0 auto' }} className="p-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{description?.slice(0, 60)} . . .</p>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between fs-3 fw-bold">
                            <p className="text-info">${price}</p>
                            <Link to={`/rose-bouquet/${_id}`}>
                                <button className="btn btn-outline-secondary">Details</button>
                            </Link>
                        </div>
                    </Card.Text>
                    {/* <Card.Text>
                        <div className="d-flex justify-content-between">
                            <Link to={`/rose-bouquet/${_id}`}>
                                <button className="btn btn-outline-secondary">Details</button>
                            </Link>
                        </div>
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default RoseBouquet;