import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './SingleBlogPost.css';

const SingleBlogPost = () => {

    const [singlePost, setSinglePost] = useState([])
    const { id } = useParams()

    // Async/Await Method to fetch posts from the API
    const fetchSinglePost = async () => {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await response.json()
            setSinglePost(data)
        }
        catch (err) {
            console.log(err)
        }


    }

    useEffect(() => {
        fetchSinglePost()
    }, [])


    return (
        <div>
            <div className="container">
                <h2>{singlePost.title}</h2>
                <div className="post-body">
                    <p>
                        {singlePost.body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPost