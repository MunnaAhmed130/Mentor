import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const img1 = "https://i.ibb.co/xXhjCt4/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg";
    const img2 = "https://i.ibb.co/jznx5bT/green-chameleon-s9-CC2-SKy-SJM-unsplash.jpg";
    const img3 = "https://i.ibb.co/4P4rrdn/j-kelly-brito-Pe-UJyoylfe4-unsplash.jpg";
    const img4 = "https://i.ibb.co/Cm2NVnv/wes-hicks-4-Ee-Tna-C1-S4-unsplash.jpg";
    return (
        <Carousel fade>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3> Best Place To Learn Online</h3>
                    <p>We have the best teachers to help you learn online one on one or in a group. We work to solve your problems on this journey.</p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Best Solution to your Learning</h3>
                    <p>We have the best teachers to help you learn online one on one or in a group. We work to solve your problems on this journey.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Learn on Your own pace </h3>
                    <p>We have the best teachers to help you learn online one on one or in a group. We work to solve your problems on this journey.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;