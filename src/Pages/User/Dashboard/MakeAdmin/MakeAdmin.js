import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [userData, setUserData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData);
    };

    const handleMakeAdmin = e => {
        e.preventDefault();

    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Make Admin</h3>
                </div>

                <Form onSubmit={handleMakeAdmin}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            onChange={handleOnChange}
                            style={{ maxWidth: '570px', margin: 'auto 0' }}
                            type="email"
                            placeholder="Enter Email" />
                    </Form.Group>

                    <Button
                        type="submit"
                        className=""
                    >
                        Add as Admin
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;