import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Cliploader from './Cliploader';
import Checkout from '../sections/page/Checkout';
import axios from 'axios';

const CheckoutElement = ({normalizedPath}) => {

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
  
  useEffect(() => {
    if (normalizedPath !== '/checkout/') return;

    const fetchStripeApiKeys = async () => {
        try {
        const response = await axios.post(
            `${import.meta.env.VITE_REST_API_ENDPOINT}/wp-json/headless-payments/v1/stripe/create-payment-intent`,
            {
            amount: 5000,
            currency: "USD",
            }
        );

        const { client_secret, publishable_key } = response.data;
        const stripe = await loadStripe(publishable_key);

        setClientSecret(client_secret);
        setStripePromise(stripe);
        } catch (error) {
        console.error("Error fetching Stripe keys:", error);
        }
    };
        fetchStripeApiKeys();
    }, [normalizedPath]);

return (
     <div>
        {!clientSecret || !stripePromise ? (
            <Cliploader/>
        ) : (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <Checkout clientSecret={clientSecret} />
        </Elements>
        )}
    </div>
  )
}

export default CheckoutElement
