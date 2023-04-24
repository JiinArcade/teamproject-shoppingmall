import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ texts }) => {

    const navigate = useNavigate();
    const click = (id, data) => {
    // props 넘겨주기
    navigate(`/Detail/${id}`)
  }

  return (
    <div className="product-list">
      {texts.map(test => (
        <div className="product-preview" key={test.id}>
          <div onClick={() => click(test.id, test)}>
            <img src={test.url} alt="" />
          </div>
            <h2 className='best-text'>{test.recommend}</h2>
            <h3 className='title-text'>{test.title}</h3>
            <p className='length-text'>{test.length}</p>
            <p className='price-text'>{test.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product