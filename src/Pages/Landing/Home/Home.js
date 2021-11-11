import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import FeaturedOccasions from '../FeaturedOccasions/FeaturedOccasions';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Featured></Featured>
            <FeaturedOccasions></FeaturedOccasions>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;