import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Swal from 'sweetalert2';
import axios from 'axios'
import CheckoutForm from "../../partials/CheckoutForm"
import Cliploader from '../../partials/Cliploader'

const Checkout = ({clientSecret}) => {
    const [isBillingAddressDifferent, setIsBillingAddressDifferent] = useState(false)
    const [cart, setCart] = useState(null);
    const [approvalUrl, setApprovalUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const stripe = useStripe();    
    const elements = useElements();

    const setBillingAddress = () => {
        setIsBillingAddressDifferent(prev => !prev)
    }

    // PayPal Payment
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('hp_cart'));
        setCart(cartData)

        axios.post(`${import.meta.env.VITE_REST_API_ENDPOINT}/wp-json/hp/v1/paypal/create-order`, {
            amount: cartData.amount,
            currency: cartData.currency || 'USD'
        }).then(res => {
            const { approval_url } = res.data;
            if (approval_url) {
                setApprovalUrl(approval_url);
            } else {
                setError('Failed to get approval URL.');
            }
        }).catch(err => {
            console.error(err);
            setError('Failed to create PayPal order.');
        }).finally(() => setLoading(false));
    }, [])

    const handlePayPalPayment = () => {
        if (approvalUrl) {
            window.location.href = approvalUrl;
        }
    };

    // Stripe Payment
    const handleStripePayment = async () => {
        const card = elements.getElement(CardElement);
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: 'Keaton Murray'
                }
            }
        });

        if (error) {
            console.error(error.message);
        } else if (paymentIntent.status === 'succeeded') {
            Swal.fire({
                icon: 'success',
                title: 'Payment Successful!',
                confirmButtonText: 'OK',
            }).then((result) => {
                    if (result.isConfirmed) {
                    navigate('/successful-checkout'); 
                }
            });
        }
    };

    if (loading) return <Cliploader/>;

  return (
    <div className="checkout-page post-page container py-5">
        <h1 className="text-center">Checkout</h1>
        <div className="row mt-md-5 mt-3">
            <div className="col-12 col-md-6 py-3">
                <div className="card border-0 shadow-lg d-flex align-items-start justify-content-center">
                    <div className="card-body p-md-4 p-3">
                        <h5>Shipping Details</h5>
                        <hr />
                        <CheckoutForm />
                        <div className="d-inline-flex align-items-center mt-2">
                            <input type="checkbox" className="me-1 checkbox" onClick={setBillingAddress}/>
                            <label htmlFor="checkbox">My billing address is different</label>
                        </div>

                        {isBillingAddressDifferent && (
                            <div>
                                <br /><br />
                                <h5>Billing Details</h5>
                                <hr />
                                <CheckoutForm />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 py-3">
                <div className="card border-0 shadow-lg d-flex align-items-start justify-content-center">
                    <div className="card-body p-md-4 p-3 w-100">
                        <h5>Payment Methods</h5>
                        <hr />
                        <div className="w-100">
                            <button className="btn btn-paypal-custom w-100 my-3" onClick={handlePayPalPayment}> <i className="fa-brands fa-paypal me-1"></i>Pay with PayPal</button>
                            <div className="card-element-wrapper card border-0 shadow-lg">
                                <CardElement />
                                <button onClick={handleStripePayment} className="btn btn-stripe-custom w-100 my-3" disabled={!stripe || !clientSecret}> <i className="fa-brands fa-stripe-s me-1"></i>Pay with Stripe</button>
                            </div>
                            <button className="btn btn-cashapp-custom w-100 mt-3"><i className="fa-solid fa-dollar-sign me-1"></i>Pay with Cashapp</button>
                            <button className="btn btn-debit-credit-custom w-100 mt-2"><i className="fa-solid fa-credit-card me-1"></i>Pay with Debit/Credit Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
