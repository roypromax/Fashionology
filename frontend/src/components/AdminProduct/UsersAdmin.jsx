import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
//https://sleepy-erin-sheep.cyclic.app/users/all

const UsersAdmin = () => {

const [user, setUser] = useState([])


let userData = JSON.parse(localStorage.getItem("userData")) || []

const getUser = () => {
    axios.get(`https://sleepy-erin-sheep.cyclic.app/users/all`, { 
     headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${userData.token}`
}}
        
    )
    .then((res)=>{
        console.log(res.data);
        setUser(res.data)
    }).catch((error)=> console.log(error))
}

useEffect(()=>{
    getUser()
}, [])

  return (
    <div>
    <h1 style={{textAlign:'center'}}>User Details</h1>
      <table cellSpacing={50}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
                <td>Role</td>
                <td>Address</td>
                <td>PhoneNumber</td>
            </tr>
        </thead>
        <tbody>
            {
               user.map((el)=> (
                    <tr key={el.id} >
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.password}</td>
                        <td>{el.role}</td>
                        <td>{el.address}</td>
                        <td>{el.phoneNumber}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default UsersAdmin
