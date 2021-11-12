import React, { useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';

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
        <div className="my-5">
            <Container>
                <div className="" style={{ maxWidth: '520px', margin: '0 auto', minHeight: '60vh' }}>
                    <Form onSubmit={handleMakeAdmin} className="mx-auto">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email Address"
                            className="mb-3"
                        >
                            <Form.Control
                                name="email"
                                onChange={handleOnChange}
                                type="email"
                                placeholder="Email Address" />
                        </FloatingLabel>

                        <div className="ms-2">
                            <Button
                                className="btn-fvs"
                                type="submit"
                                variant="secondary"
                                size="l">
                                Make Admin
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default MakeAdmin;