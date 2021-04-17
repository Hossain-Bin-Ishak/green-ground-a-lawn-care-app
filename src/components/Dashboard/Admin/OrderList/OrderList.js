import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';

const OrderList = () => {
    const [orderInfo, setOrderInfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5550/bookings`)
            .then(res => res.json())
            .then(data => {
                setOrderInfo(data)
            })
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <div className="order-page text-center">
                        <h4>Customer Order List</h4>
                        {
                            orderInfo.map(order => (

                                <form className='checkout-form'>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Order Date & Time</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Service</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{order.orderTime}</td>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td>{order.bookingInfo.name}</td>
                                                <td>${order.bookingInfo.price}</td>
                                                <td>
                                                    <select>
                                                        <option id="status-1">Pending</option>
                                                        <option id="status-2">Done</option>
                                                        <option id="status-3">On going</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </form>

                            ))
                        }
                        {
                            orderInfo.length === 0 && <img style={{ margin: '0 auto' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/afb8cb36197347.5713616457ee5.gif" alt="spinner" />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;