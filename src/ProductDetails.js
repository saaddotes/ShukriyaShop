import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { useLocation } from 'react-router-dom';
import { renderStars } from './ProductCard.js'

function ProductDetails() {
    const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState([]);
    console.log(location.state.title)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${location.state.productId}`)
            .then(res => res.json())
            .then(data => {
                setFilteredProducts(data.images);
            })
    }, []);

    return (
        <div className='d-flex container gap-2'>
            <Carousel fade className='my-3 w-50'>
                {filteredProducts.map((product, index) => (
                    <Carousel.Item key={index} className='bg-dark text-center rounded'>
                        <Image src={product} className='product-img' rounded />
                    </Carousel.Item>
                ))}
            </Carousel >

            <div className='w-50 bg-white h-500 my-3 rounded p-5 d-flex flex-column justify-content-around'>
                <div>
                    <h1 className='text-capitalize'>{location.state.title}</h1>
                    <p>{location.state.description}</p>
                </div>
                <div className='d-flex gap-3 justify-content-between'>
                    <div className='text-center fs-4 rounded p-1'>Stock : {location.state.stock}</div>
                    <div className='rating text-end fs-3'>{renderStars(location.state.rating)}</div>
                </div>

                <div className='d-flex gap-3 '>
                    <button className='btn btn-success'>Buy Now</button>
                    <button className='btn btn-warning'>Add to Cart</button>
                </div>

            </div>

        </div>

    );
}

export default ProductDetails;
