import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "Lawn Care", link: "/emergency" },
        { name: "Indoor Planting", link: "/checkup" },
        { name: "Outdoor Planting", link: "/personal-treatment" },
        { name: "Cactus Modification", link: "/tooth-extract" },
        { name: "Window House Herbs", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Modern & Stylish Design", link: "/emergency" },
        { name: "Green Technology", link: "/checkup" },
        { name: "Cactus Modification", link: "/personal-treatment" },
        { name: "Window House Herbs", link: "/tooth-extract" },
        { name: "Cactus House Plants", link: "/checkup" },
        { name: "Indoor Atrium Home", link: "/checkup" },
        { name: "Fairy Indoor Garden", link: "/checkup" }
    ]
    const services = [
        { name: "Watering Garden", link: "/emergency" },
        { name: "Mini House Garden", link: "/checkup" },
        { name: "Outdoor Gardening", link: "/personal-treatment" },
        { name: "Backyard Triming", link: "/tooth-extract" },
        { name: "Modern & Stylish Design", link: "/emergency" },
        { name: "Green Technology", link: "/checkup" },
        { name: "Cactus Modification", link: "/personal-treatment" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Simple Services"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Hybrid Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="MultiPlan Services" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h6>Call now</h6>
                            <button className="btn btn-success">+45265985426</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className="text-white py-5">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;