import React from 'react';
import BlogPost from './BlogPost';
import './Blog.css'

function Blog() {
  return (
    <div className="Blog">
      <header className="Blog__Header">
        <h3 className="Blog__Title">Blog</h3>
        <ul className="Blog__List">
          <BlogPost />
        </ul>
      </header>
    </div>
  );
}

export default Blog;