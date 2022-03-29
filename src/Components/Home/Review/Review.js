import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Review = () => {
    return (
        <div>
            <Col>
                <Row className="single-review">
                    {/* <Col>
                    <div className="reviewer">
                        <h3>{name}</h3>
                        {url && <img className="review-img" src={url} />}<br />
                    </div>
                    <h4>{profession}</h4><br />
                    <Rating name="read-only" value={value} readOnly />
                    <br />
                    <p className="">{description}</p>
                </Col> */}
                </Row>
            </Col>
        </div>
    );
};

export default Review;