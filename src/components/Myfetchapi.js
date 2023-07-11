import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Myfetchapi() {

    const [a, b] = useState([])

    const Myfetch = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
            return res.json();

        }).then((c) => {
            b(c);
            console.log(a);
        })
    }
    useEffect(() => {
        Myfetch();
    }, [])

    return (
        <div className='container border' style={{ marginTop: 80 }}>
            <div className='row'>
                <div className='col -12' >
                    <h1>javascript fetchapi</h1>
                    <table className="table table-bordered border-danger">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">title</th>
                                <th scope="col">bodytext</th>
                                <th scope="col" width="200">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {a.map((d) => {
                                return (
                                    <tr>
                                        <th scope="row">{d.id}</th>
                                        <td>{d.title}</td>
                                        <td>{d.body}</td>
                                        <td>
                                            <button className='btn-btn-sm btn-warning' type='button'>Del</button>
                                            <Link className='btn-btn-sm btn-danger ms-2' type='button' to={`${d.id}`}>view</Link>
                                            <button className='btn-btn-sm btn-primary ms-2' type='button'>edit</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myfetchapi