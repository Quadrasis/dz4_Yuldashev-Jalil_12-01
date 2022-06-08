import React from "react";
import { Link } from "react-router-dom";

const BlogsPage = () => {
    return (
        <div>
            <h1>Blogs Page</h1>
            <ul>
                <li>
                    <Link to="/blogs/news1">  news1 </Link>
                </li>
            </ul>
        </div>
        
    )
}
export default BlogsPage;