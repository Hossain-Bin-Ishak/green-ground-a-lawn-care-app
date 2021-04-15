import React from 'react';

const ReviewDetail = ({review}) => {
 
    return (
        <div className="col-md-3">
            <div className="single-product text-center">
                <img style={{ height: '150px' }} src={review.imageURL} alt="" />
                <h4>{review.name}</h4>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;