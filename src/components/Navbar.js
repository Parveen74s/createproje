import React from 'react'
import { Signupmodal } from './Modal';
import { Link } from 'react-router-dom';
const logo = "https://img.freepik.com/free-vector/education-business-logo-template-branding-design-vector-education-center-text_53876-136247.jpg";
const w =60;

 export default function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg shadow bg-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} width={w}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to ="dashboard">dashboard</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-white">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success"type="submit">search</button>
        </form>
        <button className="btn btn-primary ms-2"type="button"data-bs-toggle="modal" data-bs-target="#signup">Sign up</button>
        <Signupmodal/>
      </div>
    </div>
  </nav></div>
  )
}
