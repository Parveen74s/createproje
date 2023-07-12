import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Myformlayout() {
    let mydata = "this is variable";
    return (
        <div className='container fluid ' style={{ marginTop: '85px' }} >
            <div className='row'>
                <div className='col-md-2'>
                    <aside className='border'>
                        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                                <span className="fs-4">Sidebar</span>
                            <hr/>
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item">
                                    <Link to="formdesign1" className="nav-link active" aria-current="page">
                                        form layout 1
                                    </Link>
                                </li>
                                <li>
                                    <Link to="formdesign2" className="nav-link link-body-emphasis">
                                        form layout 2
                                    </Link>
                                </li>
                                <li>
                                    <Link to="mychart" className="nav-link link-body-emphasis">
                                        chart
                                    </Link>
                                </li>
                                <li>
                                    <Link to="HDG" className="nav-link link-body-emphasis">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="HDG" className="nav-link link-body-emphasis">
                                        Customers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div className='col-md-10'>
                    <div className='border p-5'>
                        <h4>content {mydata}</h4>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
}
