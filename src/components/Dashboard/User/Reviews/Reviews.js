import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';


const Reviews = () => {
    const [reviews, setReviews] = useState({});
   
    useEffect(() => {
        fetch('http://localhost:5550/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
            })
    }, [])
    return (
        <div className="container">
             <div className="row">

                   {/* {
                       reviews.map(review =><ReviewDetail key={review._id} review={review}></ReviewDetail>)
                   } */}

            </div>
        </div>
    );
};

export default Reviews;