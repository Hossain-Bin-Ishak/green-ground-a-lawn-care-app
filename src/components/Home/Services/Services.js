import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState({});
   
    useEffect(() => {
        fetch('http://localhost:5550/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])
    return (
        <div className="container">
             <div className="row">

                   {/* {
                       services.map(service =><ServiceDetail key={service._id} service={service}></ServiceDetail>)
                   } */}

            </div>
        </div>
    );
};

export default Services;