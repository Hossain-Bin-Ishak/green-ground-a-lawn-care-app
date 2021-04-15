import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    backgroundColor: "#ddd",
    height:"100%"
}

const Dashboard = () => {
       return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div style={containerStyle} className="col-md-9">
                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;