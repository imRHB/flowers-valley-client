import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const BouquetDetails = () => {
    const { bqId } = useParams();

    const { user } = useAuth();

    const [bouquet, setBouquet] = useState({});

    const { title, img, description, price } = bouquet;

    useEffect(() => {
        fetch(`http://localhost:5000/bouquets/${bqId}`)
            .then(res => res.json())
            .then(data => setBouquet(data));
    }, [bqId]);

    const handleBouquetOrder = (bouquet, user) => {
        bouquet.userName = `${user.displayName}`;
        bouquet.userEmail = `${user.email}`;

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bouquet)
        })
            .then(res => res.json())
            .then(result => {

            });

        alert('You ordered the bouquet.');
    };

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
                            <Button
                                variant="light"
                                onClick={() => handleBouquetOrder(bouquet, user)}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BouquetDetails;