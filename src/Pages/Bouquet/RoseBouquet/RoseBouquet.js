import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RoseBouquet = (props) => {
    const { _id, name, img, description, price } = props.bouquet;

    return (
        <Col>
            <Card className="h-100 rounded-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{description?.slice(0, 60)} . . .</p>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between fs-3 fw-bold">
                            <p className="text-info">${price}</p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <Link to={`/rose-bouquet/${_id}`}>
                                <button className="btn btn-outline-secondary">Details</button>
                            </Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default RoseBouquet;