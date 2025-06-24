import { useState } from "react"
import CheckoutForm from "../../partials/CheckoutForm"

const Checkout = () => {
    const [isBillingAddressDifferent, setIsBillingAddressDifferent] = useState(false)

    const setBillingAddress = () => {
        setIsBillingAddressDifferent(prev => !prev)
    }

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
                            <button className="btn btn-paypal-custom w-100 my-1"> <i className="fa-brands fa-paypal me-1"></i>Pay with PayPal</button>
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
