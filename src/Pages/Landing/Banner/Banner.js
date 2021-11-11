import React from 'react';
import './Banner.css';

import bannerImg from '../../../images/banner.png';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(${bannerImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '85vh'
}

const Banner = () => {

    return (
        <div className="banner" style={bannerBg}>
            <Container>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="text-light title">
                        <p className="fs-1 fw-bold">Flowers Valley is famous for only <span className="text-danger">Rose Bouquet</span>.</p>

                        <p className="fs-3 fw-bold text-warning">You can find many kinds of Rose Bouquet for different occasions.</p>

                        <Link to="/rose-bouquet">
                            <Button variant="dark" className="btn-fvs">Explore More</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;