import {Link} from 'react-router-dom';

const NavLinks = () => {
  return (
   <ul className="navbar-nav mt-5 list-unstyled m-0 p-0 justify-content-center d-flex flex-column flex-md-row">
        <li className="nav-item py-1 me-3">
            <Link to="/popular-products" className="nav-link text-decoration-none text-dark">
            Popular Products
            </Link>
        </li>
        <li className="nav-item py-1 me-3">
            <Link to="/featured-products" className="nav-link text-decoration-none text-dark">
            Featured Products
            </Link>
        </li>
        <li className="nav-item py-1 me-3">
            <Link to="/on-sale" className="nav-link text-decoration-none text-dark">
            On Sale
            </Link>
        </li>
        <li className="nav-item py-1 me-3">
            <Link className="nav-link text-decoration-none text-dark">My Account</Link>
        </li>
    </ul>
  )
}

export default NavLinks