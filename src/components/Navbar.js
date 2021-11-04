import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <Link to="/" className="navbar-brand ml-5 h1">Redux Contact App</Link>
    </nav>
  )
}

export default Navbar
