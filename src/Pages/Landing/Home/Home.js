import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import FeaturedOccasions from '../FeaturedOccasions/FeaturedOccasions';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <FeaturedOccasions></FeaturedOccasions>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;