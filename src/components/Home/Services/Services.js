import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5550/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                // console.log(data);
            })
    }, [])
    return (
        <div className="container service-area">
            <div className="row text-center">
                <div className="service-headling">
                    <h4 className="mt-5 color-green">OUR SERVICES</h4>
                    <h1 style={{ maxWidth: '550px', margin: '25px auto' }}>The Services That We Render
Your indoor garden</h1>
                </div>


                {
                    services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                }

            </div>

        </div>
    );
};

export default Services;