import Img from '../partials/Img.jsx'
import logo from '/img/logo.png'
import NavLinks from '../partials/NavLinks.jsx'

const Nav = () => {
  return (
   <div className="row align-items-center w-100">
        <div className="col-4 col-md-3">
            <div className="logo ms-2">
                <Img src={logo} alt="Logo" />
            </div>
        </div>
        <div className="col-md-6 d-none d-md-block text-center nav-links">
            <NavLinks />
        </div>
        <div className="col-8 col-md-3 text-end action-items">
            <div className="bag-icon-wrapper">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="cart-count">3</span>
            </div>
            <i className="fa-solid fa-bars ms-3"></i>
        </div>
    </div>
  )
}

export default Nav
