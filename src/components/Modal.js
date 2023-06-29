import React, { Fragment } from 'react';
import "./style.css";
import {useForm} from 'react-hook-form';

export function Signupmodal()
 {
    const { register, handleSubmit,formState: { errors }} = useForm();
  const myfunc = (data) =>{
    console.log(data);
  }  
    return (
        <Fragment>
            <form onSubmit={handleSubmit(myfunc)}>
            <div class="modal fade" id="signup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header bg-primary ">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">User Registration page</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <main className='container-fluid'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label class="form-label">Full Name</label>
                                        <input type="text" class="form-control" placeholder="fullname"{...register("fullname",{ required: true })}/>
                                        {errors.fullname && <div class="form-text text-danger">required fullname</div>}
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label">Email Id</label>
                                        <input type="email" class="form-control" placeholder='email id'{...register("email id",{ required: true })} />
                                        {errors.email  && <div class="form-text text-danger">required email id</div>}
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label">Phone No</label>
                                        <input type="text" class="form-control" placeholder='phone'{...register("phone",{ required: true })} />
                                        {errors.phone && <div class="form-text text-danger">error message</div>}
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label">DOB</label>
                                        <input type="date" class="form-control" {...register("DOB")}/>
                                        {errors.dob && <div class="form-text text-danger">error message</div>}
                                    </div>
                                    <div className='col-md-12'>
                                        <label class="form-label">Address</label>
                                        <textarea className='form-control' rows={5} {...register("address",{ required: true })}> type address here...</textarea>
                                        {errors.address && <div class="form-text text-danger">error message</div>}
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label">UserName</label>
                                        <input type="text" class="form-control"{...register("username",{ required: true })} />
                                        {errors.username && <div class="form-text text-danger">required username</div>}
                                    </div>
                                    <div className='col-md-6'>
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control"{...register("password",{ required: true })} />
                                        {errors.password && <div class="form-text text-danger">required password</div>}
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-success">submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </Fragment>
    )
}