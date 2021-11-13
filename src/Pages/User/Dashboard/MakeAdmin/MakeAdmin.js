import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState({});
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleMakeAdmin = e => {
        e.preventDefault();

        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('New admin added successfully.');
                    setSuccess(true);
                }
                else {
                    alert('Email address not found on the server');
                }
            })
    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Add New Admin</h3>
                </div>

                <Form onSubmit={handleMakeAdmin}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            onBlur={handleOnBlur}
                            style={{ maxWidth: '570px', margin: 'auto 0' }}
                            type="email"
                            placeholder="Enter Email" />
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="dark"
                    >
                        Add Admin
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;