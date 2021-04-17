import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import './ServiceDetail.css';

const ServiceDetail = (props) => {
    const { _id, name, title, price, description, imageURL } = props.service;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleRoute = () => {

        if (loggedInUser) {
            history.push('/booking');
        } else {
            history.push('/login');
        }
        // console.log(handleRoute);
    }

    return (
        <div className="col-md-4">
            <div className="single-product text-center">
                <img style={{ height: '150px' }} src={imageURL} alt="" />
                <h4>{name}</h4>
                <h3>{title}</h3>
                <h5>${price}</h5>
                <p>{description}</p>
                <Link onClick={() => {
                    handleRoute()

                }} to={`/services/${_id}`} className="btn btn-brand text-white btn-hover">Book Now</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;