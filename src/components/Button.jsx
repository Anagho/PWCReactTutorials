import React from 'react'

const Button = ({ text, mycolor }) => {
    return (
        <button style={{ color: 'blue', backgroundColor: mycolor }}>{text}</button>

    )
}

export default Button