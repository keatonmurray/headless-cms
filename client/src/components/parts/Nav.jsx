import Img from '../partials/Img.jsx'
import logo from '/img/logo.png'
import NavLinks from '../partials/NavLinks.jsx'
import { Link } from 'react-router-dom'
import CartOverlay from '../partials/CartOverlay'
import { useState } from 'react'

const Nav = () => {
    const [isCartExpanded, setIsCartExpanded] = useState(false);

    const toggleCartOverlay = () => {
        setIsCartExpanded(prev => !prev);
    }

    return (
        <div className="row align-items-center w-100 px-md-5 px-0">
            <div className="col-4 col-md-3">
                <Link to="/" className="logo ms-2">
                    <Img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="col-md-6 d-none d-md-block text-center nav-links">
                <NavLinks />
            </div>
            <div className="col-8 col-md-3 text-end action-items position-relative">
                <div className="bag-icon-wrapper position-relative d-inline-block">
                    <i className="fa-solid fa-bag-shopping position-relative" onClick={toggleCartOverlay}></i>
                    <span className="cart-count">3</span>
                    <div className={`cart-overlay-wrapper ${isCartExpanded ? 'show' : ''}`}>
                        <CartOverlay />
                    </div>
                </div>
                <i className="fa-solid fa-bars ms-3"></i>
            </div>
        </div>
    )
}

export default Nav
