import React from 'react'

const NavLinks = () => {
  return (
    <ul className="d-flex list-unstyled m-0 p-0 justify-content-center">
        <li className="me-3">
            <a className="text-decoration-none text-dark">Popular Products</a>
        </li>
        <li className="me-3">
            <a className="text-decoration-none text-dark">Featured Products</a>
        </li>
        <li className="me-3">
            <a className="text-decoration-none text-dark" >On Sale</a>
        </li>
        <li className="me-3">
            <a className="text-decoration-none text-dark">My Account</a>
        </li>
    </ul>
  )
}

export default NavLinks
