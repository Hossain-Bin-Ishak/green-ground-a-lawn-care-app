import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const ServiceDetail = ({service}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleRoute = () => {

        if (loggedInUser) {
            history.push('/book');
        } else {
            history.push('/login');
        }
        console.log(handleRoute);
    }

    return (
        <div className="col-md-3">
            <div className="single-product text-center">
                <img style={{ height: '150px' }} src={service.imageURL} alt="" />
                <h4>{service.name}</h4>
                <h3>{service.title}</h3>
                <h5>${service.price}</h5>
                <p>{service.description}</p>
                <Link onClick={() => {
                    handleRoute()

                }} to={`/checkout/${service._id}`} className="btn btn-success">Book Now</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;