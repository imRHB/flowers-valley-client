import { faFacebookSquare, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

// import logo from '../../../images/logo-sm.png';

const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

const Footer = () => {

    return (
        <div className="py-5 footer-area">
            <Container>
                <Row className="g-4">
                    <Col>
                        <h3 className="d-flex align-items-center fw-bold text-danger">
                            {/* <img src={logo} alt="" style={{ width: 'auto', height: '36px' }} /> */}
                            FLOWERS VALLEY</h3>
                        <div className="d-flex align-items-center">
                            <div>
                                <p className="fs-4">{map}</p>
                            </div>

                            <div className="ms-3">
                                <p>H#000 (o<sup>th</sup> Floor), Road #00.
                                    <br />
                                    New DOHS, Dhanmondi,
                                    Dhaka, Bangaldesh
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h4 className="fw-bold">Explore</h4>
                            <Nav className="flex-column">
                                <Link to="/home">Home</Link>
                                <Link to="/flowers">Flowers</Link>
                                <Link to="/occasion">Occasions</Link>
                                <Link to="#">Terms Conditions</Link>
                                <Link to="#">Submit Listing</Link>
                            </Nav>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h4 className="fw-bold">Quick Links</h4>
                            <Nav className="flex-column">
                                <Link to="#">Quick Links</Link>
                                <Link to="#">Rentals</Link>
                                <Link to="#">Corporate Sales</Link>
                                <Link to="#">Contact</Link>
                                <Link to="#">Our Blog</Link>
                            </Nav>
                        </div>
                    </Col>

                    <Col>
                        <h4 className="fw-bold">About Us</h4>
                        <p>Flowers Valley understand that the small things in life make the biggest impact. That is why we believe that every important occasion, event and moment should be marked by the delicate beauty of fresh flowers.</p>

                        <Nav className="">
                            <Nav.Item>
                                <Nav.Link href="https://www.facebook.com/" target="_blank">{facebook}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.instagram.com/" target="_blank">{instagram}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.linkedin.com/" target="_blank">{linkedin}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.youtube.com/" target="_blank">{youtube}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

                <div className="my-5 text-center">
                    <p className="text-light"><small>Copyright 2021, Flowers Valley</small></p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;