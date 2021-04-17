import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import { Table } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderInfo, setOrderInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5550/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrderInfo(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <div className="order-page text-center">

                        {

                            orderInfo.map(order => (

                                <form className='order-form'>
                                    <h4>Yah...! Your order has been placed successfully.</h4>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Order Date & Time</th>
                                                <th>Customer Name</th>
                                                <th>Service Name</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{order.orderTime}</td>
                                                <td>{order.name}</td>
                                                <td>{order.bookingInfo.name}</td>
                                                <td>${order.bookingInfo.price}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </form>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;