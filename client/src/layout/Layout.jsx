import React from 'react'
import Nav from '../components/parts/Nav'
import Footer from '../components/parts/Footer'

const Layout = ({children}) => {
  return (
    <div className="px-md-4 p-3">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
