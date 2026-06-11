
import React, { useEffect, useState } from 'react'


export default function Display_data() {
    const[users,setUsers]= useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  
  }, []);
  console.log(users)
  return (
    <>
      <h1>Display_data</h1>
      <p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map(user => (
          <li key={user.id} className="bg-white shadow p-4 rounded-xl">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.company.name}</p>
          </li>
        ))}
      </ul>
      </p>
    </>
  )
}
