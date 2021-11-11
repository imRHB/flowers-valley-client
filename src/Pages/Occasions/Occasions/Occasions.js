import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Occasion from '../Occasion/Occasion';

const Occasions = () => {
    const [occasions, setOccasions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/occasion')
            .then(res => res.json())
            .then(data => setOccasions(data));
    }, []);

    return (
        <div className="my-5 text-center">
            <Container>
                <div className="my-5">
                    <h2 className="text-center fs-1 fw-bold text-secondary">Available Occasion</h2>
                    <div className="my-3 py-3 bg-light text-secondary rounded-3">
                        <p>We provide different kinds of Rose Bouquet depends of you occasion choice.</p>
                        <p>Choose bouquet depends on your occasion and get a small occasion letter with your bouquet totally free of cost.</p>
                    </div>
                </div>

                <div className="my-5">
                    <Row xs={1} sm={1} md={2} lg={3} xl={3} className="my-5 g-5">
                        {
                            occasions.map(occasion => <Occasion
                                key={occasion._id}
                                occasion={occasion}
                            ></Occasion>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Occasions;