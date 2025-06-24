import { useState, useEffect } from "react"
import axios from 'axios';
import CheckoutForm from "../../partials/CheckoutForm"
import Cliploader from '../../partials/Cliploader'

const Checkout = () => {
    const [isBillingAddressDifferent, setIsBillingAddressDifferent] = useState(false)
    const [cart, setCart] = useState(null);
    const [approvalUrl, setApprovalUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const setBillingAddress = () => {
        setIsBillingAddressDifferent(prev => !prev)
    }

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('hp_cart'));

        if (!cartData || !cartData.amount) {
            setError('Missing cart data.');
            setLoading(false);
            return;
        }

        setCart(cartData)

        axios.post('http://localhost:8000/wp-json/hp/v1/paypal/create-order', {
            amount: cartData.amount,
            currency: cartData.currency || 'USD'
        })
        .then(res => {
            const { approval_url } = res.data;
            if (approval_url) {
                setApprovalUrl(approval_url);
            } else {
                setError('Failed to get approval URL.');
            }
        })
        .catch(err => {
            console.error(err);
            setError('Failed to create PayPal order.');
        })
        .finally(() => setLoading(false));
    }, [])

    const handlePayNow = () => {
        if (approvalUrl) {
        window.location.href = approvalUrl;
        }
    };

    if (loading) return <Cliploader/>;
    if (error) return <p className="text-danger">Error: {error}</p>;

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
                            <button className="btn btn-paypal-custom w-100 my-1" onClick={handlePayNow}> <i className="fa-brands fa-paypal me-1"></i>Pay with PayPal</button>
                            <button className="btn btn-stripe-custom w-100 my-1"> <i className="fa-brands fa-stripe-s me-1"></i>Pay with Stripe</button>
                            <button className="btn btn-cashapp-custom w-100 my-1"><i className="fa-solid fa-dollar-sign me-1"></i>Pay with Cashapp</button>
                            <button className="btn btn-debit-credit-custom w-100 my-1"><i className="fa-solid fa-credit-card me-1"></i>Pay with Debit/Credit Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
