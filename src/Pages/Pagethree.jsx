import React from "react";
import { useSelector } from "react-redux";

function Pagethree() {
  const blogState = useSelector((state) => state.blog);
  console.log(blogState.blog);

  return (
    <div>
      <h1>Blog Posts</h1>
      {blogState.blog.length > 0 ? (
        <ul>
          {blogState.blog.map((post) => {
            return (
            <h1 key={post.id}>{post.title} <br></br> 
            {post.blog}</h1> 
        );
          })}
        </ul>
      ) : (
        <p>No blog posts available</p>
      )}
    </div>
  );
}

export default Pagethree;
