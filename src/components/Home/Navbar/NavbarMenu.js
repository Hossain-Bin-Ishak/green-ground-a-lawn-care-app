import React, { useContext, useEffect, useState } from 'react';
import './NavbarMenu.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../images/logo.png';
import { UserContext } from '../../../App';

const NavbarMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5550/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="container">
            <div className="menu-area">
                <Navbar expand="lg">
                    <Navbar.Brand><Link to="/home"><img style={{ width: '35%', marginLeft: '20px' }} src={Logo} alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto color-style">
                            <Nav.Link ><Link to="/home" className="nav-link">Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/services" className="nav-link">Services</Link></Nav.Link>
                            <Nav.Link ><Link to="/addReview" className="nav-link">Review</Link></Nav.Link>
                            <Nav.Link ><Link to="/contact" className="nav-link">Contact</Link></Nav.Link>
                            <Nav.Link >{
                                loggedInUser.email ? <Link to="/dashboard" className="nav-link">Dashboard</Link> : <Link style={{ display: 'none' }} to="/dashboard" className="nav-link"></Link>
                            }</Nav.Link>
                            {isAdmin && <div>  <Nav.Link ><Link to="/admin" className="nav-link">Admin</Link></Nav.Link></div>}
                            <Nav.Link >{
                                loggedInUser.email ? <button className="signOutBtn btn-brand" onClick={() => setLoggedInUser({})}>Logout</button> : <Link to="/login" className="nav-link login-btn">Login</Link>
                            }</Nav.Link>
                            <Nav.Link ><h6 className="mt-2">{loggedInUser.name}</h6></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavbarMenu;