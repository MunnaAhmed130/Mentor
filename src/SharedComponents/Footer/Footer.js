import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <Row xs={1} md={2} lg={4} className="w-100 m-0 ">
                    <Col className='footer-col ps-5 pb-2 pt-3' xs={12} sm={6} md={6} lg={3} >
                        <h5>About Bicycle Zone</h5>
                        <Link to="/">About Us</Link>
                        <Link to="/">Contact Us</Link>
                        <Link to="/">Career</Link>
                    </Col>
                    <Col className='footer-col ps-5 pb-2 pt-3' xs={12} sm={6} md={6} lg={3}>
                        <h5>Support</h5>
                        <Link to="/">Product Support</Link>
                        <Link to="/">Community</Link>
                        <Link to="/">Report Abuse</Link>
                    </Col>
                    <Col className='footer-col ps-5 pb-2 pt-3' xs={12} sm={6} md={6} lg={3}>
                        <h5>Account</h5>
                        <Link to="/">Renewal &amp; Billing</Link>
                        <Link to="/">My Products</Link>
                        <Link to="/">Create Account</Link>
                    </Col>
                    <Col className='footer-col ps-5 pb-2 pt-3' xs={12} sm={6} md={6} lg={3}>
                        <h5>Customer Services</h5>
                        <Link to="/" >Privacy Policy</Link>
                        <Link to="/">Terms &amp; Conditions</Link>
                        <Link to="/">Disclaimer</Link>
                    </Col>
                </Row>
            </div>
            <div className="footer-bottom">
                <p className="mb-0">All Rights Reserved by Munna Ahmed</p>
            </div>
        </div>
    );
};

export default Footer;