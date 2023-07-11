import React from 'react'
import { Signupmodal } from './Modal'
import { Link } from 'react-router-dom';
const w = 50;
const logo = "https://img.freepik.com/free-vector/education-business-logo-template-branding-design-vector-education-center-text_53876-136247.jpg";

export default function Navbar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <div><nav className="navbar navbar-expand-lg shadow bg-dark fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src={logo} width={w} /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="https://www.google.com/search?q=bootstrap&sxsrf">Bootstarp</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="dashboard">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="myform">forms</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="fetchapi">fetchapi</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
                <button className="btn btn-primary ms-2" type="button" data-bs-toggle="modal" data-bs-target="#signup">Sign up</button>
                <Signupmodal />
              </div>
            </div>
          </nav></div>
        </div>
      </div>
    </div>
  )
}
