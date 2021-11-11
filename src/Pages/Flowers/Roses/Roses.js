import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Rose from '../Rose/Rose';

const Roses = () => {
    const [roses, setRoses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/roses')
            .then(res => res.json())
            .then(data => setRoses(data));
    }, []);

    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Roses</h2>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {
                        roses.map(rose => <Rose
                            key={rose._id}
                            rose={rose}
                        ></Rose>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Roses;