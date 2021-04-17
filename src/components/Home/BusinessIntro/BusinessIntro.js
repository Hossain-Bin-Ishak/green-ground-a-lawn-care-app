import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import introImg from '../../../images/who-we-are-img.jpg';
import './BusinessIntro.css';

const BusinessIntro = () => {
    return (
        <div className="businessIntro mt-5 mb-3">
            <div className="container">

                <div className="row">

                    <div className="col-md-6 order-sm-1 order-2">
                        <div className="businessIntro-text">
                            <h5 className="mt-4 color-green">WHO WE ARE</h5>
                            <h2 className="mt-4 color-black">Convert your home into a
green Modern house!</h2>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
</p>
                            <p> <FontAwesomeIcon icon={faCheck} /> Every Project is Run by a Team of Experts</p>
                            <p> <FontAwesomeIcon icon={faCheck} /> We provide excellence service to your needs</p>

                            <button className="btn-brand text-brand mt-3 p-2">Get a Quote</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 order-1">
                        <img style={{ width: '100%', borderRadius: '10px' }} src={introImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessIntro;