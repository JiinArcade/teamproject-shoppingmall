import React from 'react'
import './Product.css'

const Product = ({ blogs, title }) => {
  return (
    <div className="product-list">
      {blogs.map(blog => (
        <div className="product-preview" key={blog.id}>
          <img src={blog.url} alt="" />
          <h2 className='best-text'>{blog.recommend}</h2>
          <h3 className='title-text'>{blog.title}</h3>
          <p className='length-text'>{blog.length}</p>
          <p className='price-text'>{blog.price}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Product