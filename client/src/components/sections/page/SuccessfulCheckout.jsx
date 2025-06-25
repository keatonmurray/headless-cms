import bg from '/img/thank-you.png'
import { Link } from 'react-router-dom'

const SuccessfulCheckout = ({content}) => {
  return (
   <div className="row successful-checkout-page my-5">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-center text-center flex-wrap">
        <img src={bg} alt="Background Image" className="img-fluid mb-3" />

        <div className="w-100 d-flex justify-content-center">
          <div style={{ maxWidth: '600px' }} className="px-3">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div className="mt-3">
              <Link to="/" className="btn btn-custom-primary fw-bold">Go back to Homepage</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default SuccessfulCheckout
