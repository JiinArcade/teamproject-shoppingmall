import React from 'react'
import Product from './Product';
import { useEffect,useState } from 'react';

const Products = () => {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
       {product && <Product blogs={product} title="All Blogs" />}
    </div>
  )
}

export default Products