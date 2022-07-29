import React, { useEffect, useState } from 'react'
import './Users.css'

const Users = () => {

    // Array destructuring for users
    const [users, setUsers] = useState([])

    // // Async/Await Method to fetch data from the API
    // const getUser = async() = {

    // }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((users) => setUsers(users))
    }, [])

    const allUsers = [
        users.map((user) => (
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street + ', ' + user.address.city}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
            </tr>
        ))

    ]

    return (
        <div className='users'>

            <h2>Users</h2>
            <div className="user-table">
                {/* {users.map((user, index) => (<div>

                    <h3 key={user.id}> {user.id}: {user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.street}</p>
                </div>))}; */}

                <table>
                    <thead>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </thead>
                    <tbody>
                        {allUsers}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users