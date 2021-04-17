import React from 'react';
import './OurTeam.css';
import teamMember1 from '../../../images/team-person-1.jpg';
import teamMember2 from '../../../images/team-person-2.jpg';
import teamMember3 from '../../../images/team-person-3.jpg';
import teamMember4 from '../../../images/team-person-4.jpg';

const OurTeam = () => {
    return (
        <div className="container">
            <h4 className="text-center mb-5 color-green">Our Team</h4>
            <h1 className="text-center mb-5">Meet Our Dedicated Team</h1>
            <div className="row">
                <div className="col-md-3">
                    <div className="team-member text-center">
                        <img src={teamMember1} alt="" />
                        <h6 className="mt-3 color-green">CEO & OWNER</h6>
                        <h4>John Harris</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="team-member text-center">
                        <img src={teamMember2} alt="" />
                        <h6 className="mt-3 color-green">SENIOR SUPERVISOR</h6>
                        <h4>Dan Western</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="team-member text-center">
                        <img src={teamMember3} alt="" />
                        <h6 className="mt-3 color-green">SALES MANAGER</h6>
                        <h4 className="mb-5">Amanda Meery</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="team-member text-center">
                        <img src={teamMember4} alt="" />
                        <h6 className="mt-3 color-green">SENIOR WORKER</h6>
                        <h4>Kevin Tylon</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;