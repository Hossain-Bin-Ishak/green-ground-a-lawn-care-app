import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCommentAlt, faHome, faList, faLuggageCart, faPlus, faSignOutAlt, faSwatchbook, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5550/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <h3>Dashboard</h3>
            <ul className="list-unstyled">
                    <li>
                        <Link to="/book" className="text-white">
                            <FontAwesomeIcon icon={faLuggageCart} /> <span>Book</span>
                        </Link>
                    </li>  
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faSwatchbook} /> <span>Booking List</span>
                        </Link>
                    </li>

                  
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faBoxOpen} /> <span>Order List</span>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white" >
                            <FontAwesomeIcon icon={faList} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;