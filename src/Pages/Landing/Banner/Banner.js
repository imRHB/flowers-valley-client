import React from 'react';
import './Banner.css';

import bannerImg from '../../../images/banner.png';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(${bannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '85vh'
}

const Banner = () => {

    return (
        <div className="banner" style={bannerBg}>
            <Container>
                <div className="banner-title">
                    <div className="text-center">
                        <p className="fs-1 fw-bold"><span className="text-danger">Flowers Valley</span> is famous for only <span className="text-warning">Rose Bouquet</span></p>

                        <p className="fs-4 fw-bold">You can find many kinds of Rose Bouquet for different occasions</p>

                        <Link to="/rose-bouquet">
                            <Button variant="danger">Explore More</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;