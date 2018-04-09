import React from 'react'
import Link from 'gatsby-link'

import instagram from '../img/instagram-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.instagram.com/wyyyld/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={instagram} alt="Instagram" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
