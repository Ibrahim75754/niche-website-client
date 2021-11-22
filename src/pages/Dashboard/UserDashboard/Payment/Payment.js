import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jwsr4GGp8YP4qE1D9rSVoAQRUPtaNWKn9pmxwAEg4N9Uw9q7r1i9gvmdQro85kzC2oc8sOms8w3Allfg12jKYce00V7Iv4yJe');

const Payment = () => {
    const { ordersId } = useParams();
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/order/${ordersId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [ordersId])

    return (
        <div>
            <h1>Payment for id {ordersId}</h1>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order}
                />
            </Elements>}
        </div>
    );
};

export default Payment;