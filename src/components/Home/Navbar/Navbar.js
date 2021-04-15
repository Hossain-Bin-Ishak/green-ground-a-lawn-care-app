import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.png';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <div className="row">
            <div className="navbar-bg">
            <nav className="navbar navbar-expand-lg navbar-light">
             <a className="navbar-brand logo" href="#"><img src={Logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/review">Review</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/admin">Admin</a>
                    </li>
                    <li className="nav-item">
                    {
                        loggedInUser.email ? <button className="btn-brand" onClick={() => setLoggedInUser({})}>Logout</button> : <Link to="/login" className="nav-link login-btn">Login</Link>
                    }
                    </li>
                </ul>
            </div>
        </nav>
            </div>
            </div>
        </div>
    );
};

export default Navbar;