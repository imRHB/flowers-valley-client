import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const repair = <FontAwesomeIcon icon={faTools} />;

const NotFound = () => {

    return (
        <div>
            <Container>
                <div className="text-center not-found">
                    <p className="fs-1">{repair}</p>
                    <span className="text-muted"><small>couldn't repair</small></span>
                    <h1 className="fw-bold text-danger">Error 404</h1>
                    <p className="text-muted">The requested URL was not found on this server.</p>
                    <p>Visit <Link to="/home" className="red-url">Home</Link> until the problem is resolved.</p>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;