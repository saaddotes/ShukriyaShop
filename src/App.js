import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation.js';
import ProductsTray from './ProductsTray.js';
import './App.css';
import Footer from './Footer.js'
// import  { Routes, Route} from 'react-router-dom';
import ProductDetails from './ProductDetails.js';
import Cart from './Cart.js';

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems , setCartItems] = useState([])
  let myCategory = "All Products:"

  useEffect(() => {
    fetchAllProducts();
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts


  function onSearchProduct(query) {
    if (query !== '') {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(res => res.json())
        .then(data => {
          setFilteredProducts(data.products);
        })
        .catch(error => console.error("Error fetching categories:", error));
    } else {
      fetchAllProducts(); // Fetch all products when no category is selected
    }
  }

  function onSelectCategory(category) {
    if (category !== '') {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
          setFilteredProducts(data.products);
        })
        .catch(error => console.error("Error fetching categories:", error));
    } else {
      fetchAllProducts(); // Fetch all products when no category is selected
    }
  }

  function fetchAllProducts() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setFilteredProducts(data.products);
      })
      .catch(error => console.error("Error fetching products:", error));
  }

  return (
    <Router>
      <>
        <Navigation onSelectCategory={onSelectCategory} onSearchProduct={onSearchProduct} cartItems={cartItems}/>
        <Routes>
          <Route path='/' element={<ProductsTray filteredProducts={filteredProducts} category={myCategory}/>} />
          <Route path='/productdetails' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} /> } />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        {/* <ProductsTray filteredProducts={filteredProducts} /> */}
        {/* <Container>
        <ProductDetails />
      </Container> */}
        <Footer />
      </>
    </Router >
  );
}

export default App;
