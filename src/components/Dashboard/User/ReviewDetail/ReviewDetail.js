import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = ({ review }) => {

    return (
        <div className="col-md-4">
            <div className="single-review text-center">
                <div className="review-imge mb-3">
                    <img style={{ height: '200px', borderRadius: '10px', boxShadow: '4px 4px 8px #ddd' }} src={review.imageURL} alt="" />
                    <h4 className="text-center mt-2">{review.name}</h4>
                </div>
                <div className="review-text ms-3">
                    <p>{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;