import React from 'react'
import { Link } from 'react-router-dom'

function Formdesign2() {
    return (
        <div className='container fluid bg-dark'>
            <div className='row'>
                <div className='col-12'>
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="https://www.google.com/search?q=nature photo&gs_ivs=1" className="btn btn-link border">Nature</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body ">
                                    <h5 className="card-title text-center">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="https://google.com/search?q=teacnology photo&gs_ivs=1" className="btn btn-link border">tecnology</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Formdesign2