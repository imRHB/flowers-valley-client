import React, { useState } from 'react';
import { Alert, Button, Container, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

import logo from '../../../images/logo.png';

const Login = () => {
    const [userData, setUserData] = useState({});
    const { user, authError, loading, loginWithEmailPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData);
    };

    const handleLogin = e => {
        e.preventDefault();

        loginWithEmailPassword(userData.email, userData.password, location, history);
    };

    return (
        <div className="bg-light py-5 text-center login-area">
            <div className="text-center">
                {
                    user?.email && <Alert variant="success}">
                        Logged in successfully with {user.email}
                    </Alert>
                }

                {
                    authError && <Alert variant="danger}">
                        {authError}
                    </Alert>
                }
            </div>

            {
                !loading && <Container className="">
                    <div className="my-5">
                        <img src={logo} alt="logo" style={{ width: 'auto', height: '96px', padding: '4px' }} />
                    </div>

                    <div className="" style={{ maxWidth: '520px', margin: '0 auto' }}>
                        <Form onSubmit={handleLogin} className="mx-auto">
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

                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="password"
                                    onChange={handleOnChange}
                                    type="password"
                                    placeholder="Password" />
                            </FloatingLabel>

                            <div className="d-grid gap-2">
                                <Button
                                    className="btn-fvs"
                                    type="submit"
                                    variant="secondary"
                                    size="lg">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>

                    <div className="my-4">
                        <p>Don't have an account? <Link
                            to="/register"
                            className="user-toggle">
                            Create an account
                        </Link>
                        </p>
                    </div>
                </Container>
            }

            <div className="text-center">
                {
                    loading && <div className="text-center">
                        <Spinner
                            animation="border"
                            variant="warning"
                        />
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;