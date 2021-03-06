import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Occasion from '../../Occasions/Occasion/Occasion';

const FeaturedOccasions = () => {
    const [occasions, setOccasions] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetch('https://quiet-peak-91569.herokuapp.com/occasion')
            .then(res => res.json())
            .then(data => setOccasions(data.slice(0, 6)));
    }, []);

    const handleMore = () => {
        history.push('/occasion');
    };

    return (
        <div className="my-5 text-center">
            <Container>
                <h3 className="fw-bold my-3">
                    Choose Bouquet on Different <span className="text-danger">Occasion</span>
                </h3>

                <div className="my-5">
                    <Row xs={1} sm={1} md={2} lg={2} xl={3} className="g-5 g-md-4 g-lg-5">
                        {
                            occasions.map(occasion => <Occasion
                                key={occasion._id}
                                occasion={occasion}
                            ></Occasion>)
                        }
                    </Row>
                </div>

                <div className="my-3">
                    <Button
                        onClick={handleMore}
                        variant="dark"
                        className="btn-jer"
                    >More Occasions</Button>
                </div>
            </Container>
        </div>
    );
};

export default FeaturedOccasions;