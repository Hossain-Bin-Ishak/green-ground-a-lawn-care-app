import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCard from './SimpleCard';
const stripePromise = loadStripe('pk_test_51IeNPzAGs3VUlI5Ks1n9QxqhZd5WZYYoKlxRy2kPeh67kQdtP9Ec6GC2LpsSJAuR2q00ojGPyBzIFENLEwrzvBuT00dWIfMNLS');
const ProcessPayment = ({handlePayment}) => {
    return (
     <div className="container">
         
           <Elements stripe={stripePromise}>
            <SimpleCard handlePayment={handlePayment}></SimpleCard>
        </Elements>
     </div>
    );
};

export default ProcessPayment;