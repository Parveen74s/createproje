import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { json } from 'react-router-dom';

const mydatas = [];

function Formdesign1() {
    const [a, b] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();
    const mySubmit = data => {
        console.log(data);
        b(data)
        mydatas.push(a);
        console.log(mydatas);
        localStorage.setItem("datalist",JSON.stringify(mydatas));
    }

    return (
        <div className='container fluid bg-light'>
            <div className='row'>
                <div className='col-12'>
                    <form onSubmit={handleSubmit(mySubmit)}>
                        <div className="mb-3">
                            <label className="form-label">fullname</label>
                            <input type="text" className="form-control"{...register("fullname", { required: true })} />
                            {errors.fullname && <div className='text-danger'>required fullname</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">email-id</label>
                            <input type="email" className="form-control"{...register("email", { required: true })} />
                            {errors.email && <div className='text-danger'>required email</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">phone</label>
                            <input type="text" className="form-control"{...register("phone", { required: true })} />
                            {errors.phone && <div className='text-danger'>required phone</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" {...register("password", { required: true })} />
                            {errors.password && <div className='text-danger'>required password</div>}
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input"{...register("condition", { required: true })} />
                            <label className="form-check-label">are you working</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formdesign1
