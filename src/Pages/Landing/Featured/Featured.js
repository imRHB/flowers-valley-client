import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RoseBouquet from '../../Bouquet/RoseBouquet/RoseBouquet';
import './Featured.css';

const Featured = () => {
    const [bouquets, setBouquets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bouquets')
            .then(res => res.json())
            .then(data => setBouquets(data.slice(0, 6)));
    }, []);

    return (
        <div className="bg-light py-5">
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Featured Rose Bouquet</h2>
                <Row xs={1} md={2} lg={3} xl={3} className="g-5">
                    {
                        bouquets.map(bouquet => <RoseBouquet
                            key={bouquet._id}
                            bouquet={bouquet}
                        ></RoseBouquet>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Featured;