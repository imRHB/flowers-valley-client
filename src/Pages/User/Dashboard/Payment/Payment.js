import React from 'react';
import { Container } from 'react-bootstrap';

const Payment = () => {

    return (
        <div className="my-5" style={{ minHeight: '60vh' }}>
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary">Make Payment</h2>

                <p className="bg-danger text-light p-4 my-4">Payment method will be available soon</p>
            </Container>
        </div>
    );
};

export default Payment;