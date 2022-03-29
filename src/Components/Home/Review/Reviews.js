import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://agile-island-88744.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews.name)

    return (
        <div className="reviews-container">
            <div className="review-info">
                <h2>Some Valuable Opinions!</h2>
                <h3>Reviews</h3>
            </div>
            <Row xs={1} sm={1} md={2} lg={2} xl={3} className="reviews">
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;