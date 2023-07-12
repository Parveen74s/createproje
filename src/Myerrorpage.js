import React from 'react';
import { Link } from 'react-router-dom';

function Myerrorpage() {
    return (
        <div className='container-fluid' style={{ marginTop: 100 }}>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1 className='myerror'>404</h1>
                    <p className='mypage'> &#9977;&#9977;page not found &#9977;</p>
                    &#10148; <Link to="/" className='btn btn-success'>Go to home</Link>
                </div>
            </div>
        </div>
    )
}

export default Myerrorpage