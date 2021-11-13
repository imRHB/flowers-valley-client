import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RoseBouquet from '../RoseBouquet/RoseBouquet';

const RoseBouquets = () => {
    const [bouquets, setBouquets] = useState([]);

    useEffect(() => {
        fetch('https://quiet-peak-91569.herokuapp.com/bouquets')
            .then(res => res.json())
            .then(data => setBouquets(data));
    }, []);

    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Available Rose Bouquet</h2>
                <Row xs={1} md={2} lg={3} xl={3} className="g-4">
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

export default RoseBouquets;