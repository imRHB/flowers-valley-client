import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Occasion.css';

const Occasion = (props) => {
    const { name, img, description } = props.occasion;

    return (
        <div>
            <Col>
                <Card className="text-center p-5 border-0 rounded-3 occasion-card">
                    <img src={img} alt="" style={{ width: '72px', height: '72px', borderRadius: '50%' }} className="mx-auto" />
                    <Card.Body>
                        <Card.Title><span className="fw-bold">{name}</span></Card.Title>

                        <Card.Text>
                            {description.slice(0, 200)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Occasion;