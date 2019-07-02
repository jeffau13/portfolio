import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => (
  <React.Fragment>
    <header>
      <Link to="/"> My portfolio</Link>
    </header>
    <main>{children}</main>
  </React.Fragment>
)

export default Layout
