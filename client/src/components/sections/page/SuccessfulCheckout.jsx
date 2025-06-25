import bg from '/img/thank-you.png'
import { Link } from 'react-router-dom'

const SuccessfulCheckout = () => {
  return (
    <div class="d-flex justify-content-center align-items-center flex-wrap">
      <img src={bg} alt="Background Image" />
      <div className="w-100 text-center">
        <h2>Thank you for your purchase!</h2>
        <br />
        <div className="px-md-5 px-2 text-center">
            <p>
                We’ve received your order and will begin processing it shortly. You’ll receive a confirmation email once everything is ready.
                <span className="d-block">
                    If you have any questions in the meantime, feel free to contact our support team at <strong>support@spikyblooms.com</strong>.
                </span>
                <span className="d-block">
                    <strong><i>— The Spiky Blooms Team</i></strong>
                </span>
            </p>
        </div>
        <br />
        <Link to="/" className="btn btn-custom-primary fw-bold">Go back to the homepage</Link>
      </div>
    </div>
  )
}

export default SuccessfulCheckout
