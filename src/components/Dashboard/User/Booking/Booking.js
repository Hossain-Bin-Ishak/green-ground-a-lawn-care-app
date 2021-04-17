import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import { UserContext } from '../../../../App';
import ProcessPayment from '../../../ProcessPayment/ProcessPayment';
import Sidebar from '../../Sidebar/Sidebar';
import './Booking.css';


const Booking = () => {
    const { bookingId } = useParams();
    // console.log(bookingId);
    const [bookingInfo, setBookingInfo] = useState({});
    //console.log(bookingInfo);
    const { name, price } = bookingInfo;
    useEffect(() => {
        fetch(`http://localhost:5550/services/${bookingId}`)
            .then(res => res.json())
            .then(data => {
                setBookingInfo(data)
            })
    }, []);

    // console.log(bookingInfo);

    const { register, handleSubmit } = useForm();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/bookingList" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        console.log('form submitted', data)
        const bookingDetails = { ...loggedInUser, bookingInfo: bookingInfo, orderTime: new Date() };
        fetch('http://localhost:5550/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('Your order placed successfully');
                    history.replace(from);
                }
            })
    };

    const handlePaymentSuccess = paymentId => {

        const booking = {
            ...loggedInUser,
            // services: bookingDetails, 
            // shipment: bookingData, 
            paymentId,
            orderTime: new Date()
        };


    };



    const history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <div className="booking-form-area">
                        <form className='booking-form' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" name="name" id="" placeholder="Your Name" value={loggedInUser.name} {...register("name", { required: true })} />
                            <br />
                            <input type="email" name="email" id="" placeholder="Your Email" value={loggedInUser.email} {...register("email", { required: true })} />
                            <br />
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Service Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{name}</td>
                                        <td>${price}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div style={{ width: '450px' }} className="payment-info text-center">
                                <h5 className="text-center">Payment Details</h5>
                                <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>
                            </div>
                            <input style={{ width: '450px' }} type="submit" value='Place Order' className="btn btn-brand text-white" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;