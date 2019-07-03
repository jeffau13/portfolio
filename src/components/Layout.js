import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => (
  <React.Fragment>
    <header className="header">
      <Link to="/"> My portfolio</Link>
    </header>
    <main>{children}</main>
  </React.Fragment>
)

export default Layout
