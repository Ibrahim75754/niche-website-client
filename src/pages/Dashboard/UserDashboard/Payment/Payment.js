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
        fetch(`https://agile-everglades-07523.herokuapp.com/orders/${ordersId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [ordersId])

    return (
        <div >
            <h1 style={{ width: "50%" }}>Payment for Product : {order?.productName}</h1><br />
            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order}
                />
            </Elements>}
        </div>
    );
};

export default Payment;