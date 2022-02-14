import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";



function Userlist() {
    const [users, setUsers] = useState([])
    useEffect(async () => {
        try {
            let user = await fetch("https://61d19a13da87830017e592a4.mockapi.io/users");
            let userData = await user.json()
            setUsers(userData)
        } catch (error) {
            console.log(error)
        }
    }, [])

    let deleteUser = (async (id) =>{
        let result = await fetch(`https://61d19a13da87830017e592a4.mockapi.io/users/${id}`, {
            method : "DELETE",
        });
        let user = await fetch("https://61d19a13da87830017e592a4.mockapi.io/users");
        let userData = await user.json()
        setUsers(userData)
    })
  
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
                <Link to="/user-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return <tr key={index}>
                                            <td>{user.Name}</td>
                                            <td>{user.Position}</td>
                                            <td>{user.Office}</td>
                                            <td>{user.Age}</td>
                                            <td>{user.StartDate}</td>
                                            <td>{user.Salary}</td>
                                            <td>
                                                <Link to={`/user-edit/${user.id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>
                                                <button className='btn btn-danger btn-sm' onClick={()=>deleteUser(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userlist
