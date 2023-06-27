import React, { Fragment } from 'react'

export function Signupmodal() {
    return (
        <Fragment>
            <div class="modal fade" id="signup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header bg-info">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">User Registration page</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <main className='container-fluid'>
                                <div classNmae='row'>
                                    <div className='col-md-6'>
                                        <label class="form-label">full name</label>
                                        <input type="text" class="form-control" placeholder='fullname' />
                                        <div class="form-text">error message</div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label">Email-id</label>
                                        <input type="email" class="form-control" placeholder='email-id' />
                                        <div class="form-text">error message</div>
                                    </div>
                                    <div className='col-md-12'>
                                        <label class="form-label">address</label>
                                        <textarea className='form-control' rows={5}>types adderss here..</textarea>
                                        <div class="form-text">error message</div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label">User name</label>
                                        <input type="text" class="form-control"/>
                                        <div class="form-text">error message</div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label">password</label>
                                        <input type="password" class="form-control" />
                                        <div class="form-text">error message</div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}