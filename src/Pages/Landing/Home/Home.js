import React from 'react';
import Occasion from '../../Occasion/Occasion';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Featured></Featured>
            <Occasion></Occasion>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;