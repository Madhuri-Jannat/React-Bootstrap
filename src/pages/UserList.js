import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function UserList() {
   const[users,setUsers]= useState([]);
   useEffect(()=>{

    axios.get('http://localhost/myapp2/Api/user_list.php')
    .then(res=> {setUsers(res.data)});
   }, []);
   console.log(users);
  return (
    <>
      <h1>UserList</h1>
      <ul>
        {users.map((user)=>(
            <li key={user?.id}>
                <p className='text-lg font-semibold'>
                    Name:{user?.name} <br />
                    Address:{user?.Address} <br />
                   District:{user?.District} <br />
                </p>
            </li>
        ))}
      </ul>
    </>
  )
}
