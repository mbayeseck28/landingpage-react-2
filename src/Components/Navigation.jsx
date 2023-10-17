import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg mb-5">
        <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <button type="button" className="btn btn-primary rounded-0">LOGIN</button>
          </li>
          <li className="nav-item">
          <button type="button" className="btn btn-outline-primary rounded-0">REGISTER</button>
          </li>
        </ul>
      </div>
      </div>
      </nav>
    </header>
  )}

export default Navigation
// rafc