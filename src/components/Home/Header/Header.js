import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
       <div className="container">
           <div className="row">
           <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
           </div>
       </div>
    );
};

export default Header;