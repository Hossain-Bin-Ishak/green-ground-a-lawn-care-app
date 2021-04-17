import React, { useEffect, useState } from 'react';
import './ManageServices.css';
import Sidebar from '../../Sidebar/Sidebar';
import { Table } from 'react-bootstrap';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5550/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                //console.log(data);
            })
    }, [services]);
    const deleteProduct = (id) => {
        fetch(`http://localhost:5550/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully');
            })
    }
    return (
        <div className="container service-area">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <div className="service-headling">
                        <h4 className="mt-5 color-green">List Of Services</h4>
                    </div>


                    {
                        services.map(service => <Table striped bordered hover size="sm" className="text-center">
                            <thead>
                                <tr>
                                    <th>Service Name</th>
                                    <th>Price</th>
                                    <th>Delete Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{service.name}</td>
                                    <td>${service.price}</td>
                                    <td><button onClick={() => deleteProduct(service._id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            </tbody>

                        </Table>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageServices;