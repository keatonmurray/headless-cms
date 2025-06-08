import {Link} from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="d-flex list-unstyled m-0 p-0 justify-content-center">
        <li className="me-3">
            <Link to="/popular-products" className="text-decoration-none text-dark">
                Popular Products
            </Link>
        </li>
        <li className="me-3">
            <Link className="text-decoration-none text-dark">Featured Products</Link>
        </li>
        <li className="me-3">
            <Link className="text-decoration-none text-dark" >On Sale</Link>
        </li>
        <li className="me-3">
            <Link className="text-decoration-none text-dark">My Account</Link>
        </li>
    </ul>
  )
}

export default NavLinks
