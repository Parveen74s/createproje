import React, { Fragment } from 'react';
import "./style.css";
import { useForm } from 'react-hook-form';

export function Signupmodal() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const myfunc = (data) => {
        console.log(data);
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(myfunc)}>
                <div className="modal fade" id="signup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header bg-primary ">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">User Registration page</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <main classNameName='container-fluid'>
                                    <div classNameName='row'>
                                        <div classNameName='col-md-6'>
                                            <label className="form-label">Full Name</label>
                                            <input type="text" className="form-control" placeholder="fullname"{...register("fullname", { required: true })} />
                                            {errors.fullname && <div className="form-text text-danger">required fullname</div>}
                                        </div>
                                        <div classNameName='col-md-6'>
                                            <label className="form-label">Email Id</label>
                                            <input type="email" className="form-control" placeholder='email id'{...register("email id", { required: true })} />
                                            {errors.email && <div className="form-text text-danger">required email id</div>}
                                        </div>
                                        <div classNameName='col-md-6'>
                                            <label className="form-label">Phone No</label>
                                            <input type="text" className="form-control" placeholder='phone'{...register("phone", { required: true })} />
                                            {errors.phone && <div className="form-text text-danger">error message</div>}
                                        </div>
                                        <div classNameName='col-md-6'>
                                            <label className="form-label">DOB</label>
                                            <input type="date" className="form-control" {...register("DOB")} />
                                            {errors.dob && <div className="form-text text-danger">error message</div>}
                                        </div>
                                        <div classNameName='col-md-6'>
                                            <label className="form-label">UserName</label>
                                            <input type="text" className="form-control"{...register("username", { required: true })} />
                                            {errors.username && <div className="form-text text-danger">required username</div>}
                                        </div>
                                        <div classNameName='col-md-6'>
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control"{...register("password", { required: true })} />
                                            {errors.password && <div className="form-text text-danger">required password</div>}
                                        </div>
                                    </div>
                                </main>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-success">submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}