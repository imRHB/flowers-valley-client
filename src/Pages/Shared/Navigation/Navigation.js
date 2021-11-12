import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;

const Navigation = () => {
    const { user, logout } = useAuth();

    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" style={{ width: 'auto', height: '56px', padding: '4px' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/rose-bouquet">Rose Bouquet</NavLink>
                        <NavLink to="/occasion">Occasion</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </Nav>
                    <Nav>
                        {
                            user?.email && <NavLink to="/dashboard">Dashboard</NavLink>
                        }

                        {
                            user?.email ? <div className="d-lg-flex align-items-center justify-content-center my-2 my-md-0">

                                <h5 className="mx-0 mx-lg-3 mb-3 my-lg-auto text-primary fw-bold m-0"><span className="fs-4 ms-2">{userIcon}</span> {user.displayName}</h5>

                                <Button
                                    variant="dark"
                                    className="ms-2" onClick={logout}>Logout<span className="ms-2">{logoutIcon}</span>
                                </Button>
                            </div>
                                : <div className="my-3 my-md-3 my-lg-0">
                                    <Button
                                        variant="secondary"
                                        className="ms-2" onClick={handleLogin}>Login<span className="ms-2">{loginIcon}</span></Button>

                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>

                {/* <div className="d-flex">
                    <Nav className="">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/rose-bouquet">Rose Bouquet</NavLink>
                        <NavLink to="/occasion">Occasion</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        {
                            user?.email && <NavLink to="/dashboard">Dashboard</NavLink>
                        }
                    </Nav>

                    {user?.email ? <div className="d-flex align-items-center my-2 my-md-0">
                        <span className="fs-4 ms-2">{userIcon}</span>
                        <h5 className="mx-2 text-primary fw-bold m-0">{user.displayName}</h5>

                        <Button
                            variant="dark"
                            className="" onClick={logout}>Logout<span className="ms-2">{logoutIcon}</span></Button>
                    </div>
                        : <div className="my-3 my-md-3 my-lg-0">
                            <Button
                                variant="secondary"
                                className="me-2" onClick={handleLogin}>Login<span className="ms-2">{loginIcon}</span></Button>

                        </div>}
                </div> */}
            </Container>
        </Navbar>
    );
};

export default Navigation;


/*

<Container className="d-inline">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={logo} alt="" style={{ width: 'auto', height: '56px', padding: '4px' }} />

                    <div className="d-flex">
                        <Nav className="">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/rose-bouquet">Rose Bouquet</NavLink>
                            <NavLink to="/occasion">Occasion</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            {
                                user?.email && <NavLink to="/dashboard">Dashboard</NavLink>
                            }
                        </Nav>

                        {user?.email ? <div className="d-flex align-items-center my-2 my-md-0">
                            <span className="fs-4 ms-2">{userIcon}</span>
                            <h5 className="mx-2 text-primary fw-bold m-0">{user.displayName}</h5>

                            <Button
                                variant="dark"
                                className="" onClick={logout}>Logout<span className="ms-2">{logoutIcon}</span></Button>
                        </div>
                            : <div className="my-3 my-md-3 my-lg-0">
                                <Button
                                    variant="secondary"
                                    className="me-2" onClick={handleLogin}>Login<span className="ms-2">{loginIcon}</span></Button>

                            </div>}
                    </div>
                </div>
            </Container>

*/