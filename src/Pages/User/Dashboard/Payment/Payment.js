import React from 'react';
import { Container } from 'react-bootstrap';

const Payment = () => {

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Payment</h3>
                </div>

                <p className="bg-danger text-light p-4 my-4 rounded-3">Payment method will be available soon</p>
            </Container>
        </div>
    );
};

export default Payment;