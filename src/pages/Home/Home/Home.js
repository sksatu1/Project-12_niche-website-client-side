import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import HomeAccordion from '../HomeAccordion/HomeAccordion';

const Home = () => {
    const slice = 6;
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Bikes
                slice={slice}
            ></Bikes>
            <HomeAccordion></HomeAccordion>
        </div>
    );
};

export default Home;