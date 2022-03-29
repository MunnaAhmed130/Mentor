import React from 'react';
import Footer from '../../../SharedComponents/Footer/Footer';
import Header from '../../../SharedComponents/Header/Header';
import AboutUs from '../../AboutUs/AboutUs';
import Courses from '../../Services/Courses/Courses';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Banner />
            <HomeService />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;