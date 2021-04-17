import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Reviews.css';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5550/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                // console.log(data);
            })
    }, [])
    return (
        <div className="review-area">
            <div className="container">

                <div className="reviews text-center mb-5">
                    <h3 className="color-green">Our Clients Reviews</h3>
                    <h2 style={{ color: 'black' }}>What Our Happy Clients Said About Us </h2>
                </div>
                <div className="row">

                    {
                        reviews.map(review => <ReviewDetail key={review._id} review={review}></ReviewDetail>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Reviews;