import React from 'react'
import { Link } from "react-router-dom";

const Card = (props) => {

    const exerpt = (str) => {
        return str.length > 80 ? str.substring(0, 80) + '...' : str;
    }

    return (
        <div className="post" key={props.id}>
            <p>{props.id}</p>
            <h3>{props.title}</h3>
            <p>{exerpt(props.body)}</p>

            <Link to={"/singleBlogPost/" + props.id}>
                <button className='post-btn'>Read More <i className="fas fa-chevron-right"></i></button>
            </Link>

        </div>
    )
}

export default Card