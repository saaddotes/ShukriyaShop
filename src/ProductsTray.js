import { useState, useEffect } from 'react';
import ProductCard from './ProductCard.js';

function ProductsTray({ filteredProducts , category }) {
  if (!filteredProducts || filteredProducts.length === 0) {
    return <div className='display-3 text-center my-3'>No products available.</div>;
  }

  return (
    <>
    {/* <h5>{category}</h5> */}
      <div className='d-flex justify-content-center flex-wrap gap-3 mt-2'>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} id={product.id} title={product.title} description={product.description} thumbnail={product.thumbnail} rating={product.rating} stock={product.stock} price={product.price} discount={product.discountPercentage} />
        ))}
      </div>
    </>
  );
}

export default ProductsTray;
