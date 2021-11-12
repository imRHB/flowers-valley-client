import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BouquetDetails = () => {
    const { bqId } = useParams();

    const [bouquet, setBouquet] = useState({});

    const { _id, title, img, description, price } = bouquet;

    useEffect(() => {
        fetch(`http://localhost:5000/bouquets/${bqId}`)
            .then(res => res.json())
            .then(data => setBouquet(data));
    }, [bqId]);

    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Bouquet Details</h2>

                <Row xs={1} md={1} xl={2} className="g-5">
                    <Col className="col-md-12 col-lg-6 col-xl-6">
                        <div className="rounded-3">
                            <img className="img-fluid rounded-3" src={img} alt="" />
                        </div>
                    </Col>

                    <Col className="col-md-12 col-lg-6 col-xl-6">
                        <h1 className="fs-2 fw-bold text-info text-uppercase">{title} Bouquet</h1>

                        <div className="bg-light rounded-3 p-4 my-4">
                            <p>{description}</p>
                        </div>

                        <div className="bg-dark text-light p-4 rounded-3">
                            <h2>${price}</h2>
                            <Link to={`/place-order/${_id}`}>
                                <Button
                                    variant="light"
                                >
                                    Buy Now
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BouquetDetails;