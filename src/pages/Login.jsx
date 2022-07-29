import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username && password) {
            navigate('/')
        }
        else {
            alert("Enter username and password")
        }
    }

    return (
        <div className='container'>
            <div className="form-wrapper">
                <form action="" id='my-form'>
                    <div>
                        <label htmlFor="">Username:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Password:</label>
                        <input type="password" name="" id="" />
                    </div>
                    <input className='btn' type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login