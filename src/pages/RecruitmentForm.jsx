import { useState } from 'react';
import React from "react";
// CSS File
import './RecruitmentForm.css'

const RecruitmentForm = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setName(values => ({ ...values, [name]: value }))
    //     setAge(values => ({ ...values, [age]: value }))
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The name you entered is : ${name} and age is : ${age}`);
    }

    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <input className='btn' type="submit" />
            </form>
        </div>
    );
};

export default RecruitmentForm;
