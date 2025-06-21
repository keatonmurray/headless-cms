import bg from '/img/404.png'
import Img from './Img'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div className="py-5 d-flex align-items-center justify-content-center min-vh-100 flex-column">
        <h4 className="fw-bold">Oops! This page does not exist</h4>
        <p className="text-muted">The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className="w-100 text-center">
          <figure>
            <Img src={bg} alt="Background Image" />
          </figure>
        </div>
        <Link to="/" className="btn btn-custom-primary fw-bold">
          Go back to Homepage
        </Link>
    </div>
  )
}

export default PageNotFound
