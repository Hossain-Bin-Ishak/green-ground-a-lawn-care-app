import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarMenu from '../Navbar/NavbarMenu';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="container">
                <div className="row">
                    <NavbarMenu></NavbarMenu>
                    <HeaderMain></HeaderMain>
                </div>
            </div>
        </div>
    );
};

export default Header;