

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mx-auto  mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/register" className="nav-link">SignUp</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
<h1>Home page</h1>
export default Home