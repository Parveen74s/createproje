import React from 'react'

export default function Myslider() {
    return (
        <div classNameName='container-fluid'>
            <div classNameName="row">
                <div classNameName='col-12'>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="photo/book2.jpg" width="1400"height="750" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="photo/book1.jpg"width="1400"height="750" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="photo/book4.jpg"width="1400"height="750"className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
