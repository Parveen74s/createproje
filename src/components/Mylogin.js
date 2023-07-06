import React from 'react'
import { useForm } from "react-hook-form";
const mr = "200px";
function Mylogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const mySubmit = data => console.log(data);
    return (
        <main className='container' style={{ marginTop: `${mr}`}}>
            <form className='container' onSubmit={handleSubmit(mySubmit)}>
                <div className='row border shadow bg-light p-5'>
                    <div className="mb-3 ">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("example",{ required: true })} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        {errors.Email && <div className='text-danger'>This field is required</div>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" {...register("example",{ required: true })}/>
                        {errors.password && <div className='text-danger'>This field is required</div>}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"  {...register("example",{ required: true })}/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        {errors.condition && <div className='text-danger'>This field is required</div>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </main>
    )
}

export default Mylogin