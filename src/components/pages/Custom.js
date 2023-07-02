import React,{useState} from "react"
function Custom() {
    const[formdata, formfunction]=useState({
        fn:'fullname',
        email:'hell058@gmail.com',
        phone:'91+',
        dob:'',
        address:'address',

    });
    const datachange = (e)=>{
        console.log(e.target.value);
        const{name,value} = e.target;
        formfunction((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }


    return (
        <form>
            <main className='container-fluid border p-4 bg-light' style={{marginTop:'100px',width:'600px' }}>
                <div className='row'>
                    <div className='col-md-6'>
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="fullname" name='fn' value={formdata.fn} onChange={datachange}/>
                    </div>
                    <div className='col-md-6'>
                        <label className="form-label">Email Id</label>
                        <input type="email" className="form-control" placeholder='email id' name='email' value={formdata.email}onChange={datachange}/>

                    </div>
                    <div className='col-md-6'>
                        <label class="form-label">Phone No</label>
                        <input type="text" className="form-control" placeholder='phone' name='phone' value={formdata.phone}onChange={datachange}/>
                    </div>
                    <div className='col-md-6'>
                        <label class="form-label">DOB</label>
                        <input type="date" className="form-control" name='dob'onChange={datachange}/>
                    </div>
                    <div className='col-md-12'>
                        <label className="form-label">Address</label> 
                        <textarea className='form-control' rows={5} name='address' defaultValue={formdata.address}></textarea>
                     </div>
                     <div className='col-md-12 text-center mt-3'>
                        <button type='submit'className='btn btn-primary'>submit</button>
                     </div>
                </div>
            </main>
        </form>
    )
}

export default Custom
