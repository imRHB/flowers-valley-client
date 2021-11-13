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

        const confirmToAddAdmin = window.confirm(`Do you want to add "${email}" as admin?`);

        if (confirmToAddAdmin) {
            fetch('http://localhost:5000/users/admin', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.modifiedCount) {
                        alert(`"${email}" successfully added as admin.`);
                        setSuccess(true);
                    }
                    else if (data.matchedCount) {
                        alert(`"${email}" already added as admin.`);
                    }
                    else {
                        alert(`No user exists in database with "${email}".`);
                    }
                })
        }
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