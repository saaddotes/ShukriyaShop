import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';


function Navigation({ onSelectCategory, onSearchProduct }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  function categorySelect(event) {
    const category = event.target.value;
    onSelectCategory(category);
  }

  function handleSearch(event) {
    const query = event.target.value;
    onSearchProduct(query);
  }

  return (
    <nav className="sticky-top navbar navbar-expand-lg nav-color">
      <div className="container-fluid">
        <a className="navbar-brand logoFont text-white" href="#">ShukriyaShop</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-75">
            <li className="nav-item">
              <a className="nav-link active text-white " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <select onChange={categorySelect} className="form-select text-capitalize">
                <option value="">Select Category</option>
                {categories.map((item, index) => (
                  <option key={index} value={item} className='text-capitalize'>{item}</option>
                ))}
              </select>
            </li>
          </ul>
          <input onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className='btn btn-color cart-btn'><a className="nav-link text-white btn-color d-flex gap-2 align-items-center" href="#">Cart<Icon.Cart className="text-warning" /></a></button>

        </div>
      </div>
    </nav>


  );
}

export default Navigation;
