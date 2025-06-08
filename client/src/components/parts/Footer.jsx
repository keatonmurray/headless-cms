import React from 'react'

const Footer = () => {
  return (
    <div className="d-flex flex-column mt-5">
        <footer className="footer mt-auto bg-light py-3 text-center">
            <p className="mb-1">
            &copy; {new Date().getFullYear()} Spiky Blooms. All rights reserved.
            </p>
            <p className="mb-0 mt-2">
                <a href="https://www.instagram.com/bongjovi__/" target="_blank">
                    <i className="fa-brands fa-instagram me-2"></i>
                </a>
                <a href="https://github.com/keatonmurray" target="_blank">
                    <i className="fa-brands fa-github me-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/keaton-murray-917642302/" target="_blank">
                    <i className="fa-brands fa-linkedin me-2"></i>                   
                </a>
            </p>
        </footer>
    </div>
  )
}

export default Footer
