import React from 'react'
import { Link } from "gatsby"


const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Link to='/'>Codeanand</Link>
        <Link to='/blog'>Blog</Link>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout