import React from 'react'
import Nav from '../components/parts/Nav'

const Layout = ({children}) => {
  return (
    <div className="px-md-4 p-3">
      <Nav />
      {children}
    </div>
  )
}

export default Layout
