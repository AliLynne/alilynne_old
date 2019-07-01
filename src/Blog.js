import React from 'react';
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';
import './Blog.css'

function Blog() {
  return (
    <div className="Blog">
      <header className="Blog__Header">
        <h3 className="Blog__Title">Blog</h3>
        <ul className="Blog__List">
          <BlogPost2 />
          <BlogPost1 />
        </ul>
      </header>
    </div>
  );
}

export default Blog;