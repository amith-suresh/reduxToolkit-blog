import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Pageone() {
    const blogState = useSelector((state) => state.blog);

    return (
        <div>
            <h1>Blog Posts</h1>
            {blogState.blog.length > 0 ? (
                <ul>
                    {blogState.blog.map((post) => (
                        <li key={post.id}>
                            <Link to="/pagethree">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No blog posts available</p>
            )}
            <Link to="pagetwo">
                <button>Add Blog</button>
            </Link>
        </div>
    );
}

export default Pageone;
