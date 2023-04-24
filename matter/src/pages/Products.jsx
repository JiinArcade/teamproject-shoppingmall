import React from 'react'
import Product from './Product';
import { useEffect,useState } from 'react';

const Products = () => {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
       {product && <Product texts={product}/>}
    </div>
  )
}

export default Products