import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function Mydetailspage() {
    let {id}=useParams();
    const [a, b] = useState([])

    const Myfetch = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
            b(res.data);
        })
           
    }
    useEffect(() => {
        Myfetch();
    }, [])

  return (
   <div className='container 'style={{marginTop:80}}>
    <div className='row p-3'>
        <div className='col-3 bg-primary text-white'>{a.id}</div>
        <div className='col-3 bg-info text-white'>{a.title}</div>
    </div>
    <div className='row p-4'>
        <div className='col-12 bg-light'>
            <p>{a.body}</p>
        </div>
    </div>
   </div>
  )
}

export default Mydetailspage