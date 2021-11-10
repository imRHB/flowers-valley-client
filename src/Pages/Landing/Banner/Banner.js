import React from 'react';
import './Banner.css';

import bannerImg from '../../../images/banner.png';
import { Container } from 'react-bootstrap';

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
                <div className="d-flex">
                    {/* <button className="btn btn-fvs">Explore More</button> */}
                </div>
            </Container>
        </div>
    );
};

export default Banner;