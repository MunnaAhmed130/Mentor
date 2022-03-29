import React from 'react';
import Footer from '../../../SharedComponents/Footer/Footer';
import Header from '../../../SharedComponents/Header/Header';
import AboutUs from '../../AboutUs/AboutUs';
import Courses from '../../Services/Courses/Courses';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Banner />
            <HomeService />
            <AboutUs />
            <Newsletter />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;