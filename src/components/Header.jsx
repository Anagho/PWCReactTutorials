import React from "react";
import { Link } from "react-router-dom";
import Photo from "../images/pwc.jpeg";
import Counter from "./Counter";

function Header() {
    return (
        <header>
            <div>
                <img src={Photo} alt="" width="40" height="40" />
            </div>
            <div>
                <h3>PwC Career Website</h3>
            </div>
            <div>
                <Counter />
            </div>


            <div>
                <Link to="/">Home</Link>
                <Link to="/contactUs">Contact Us</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/applicationForm">Application Form</Link>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/studentsData">Students Data</Link>
                <Link to="/recruitmentForm">Recruitment Form</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/users">Users</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/login">Login</Link>
                <Link to="/singleBlogPost">SingleBlogPost</Link>
            </div>
        </header>
    );
}

export default Header;
