import Card from 'react-bootstrap/Card';
import './ProductCard.css';
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function ProductCard({ id, title, description, thumbnail, rating, stock , price, discount}) {
  const navigate = useNavigate();
  function toProductDetails(event) {
    const productId = event.currentTarget.getAttribute('data-id');
    console.log(productId);
    console.log(title)
    navigate("/ProductDetails", { state: { productId: productId, title: title, description: description, rating: rating, stock: stock , price:price , discount:discount} });
  }

  return (
    <div>
      <a onClick={toProductDetails} data-id={id} role='button'>
        <Card style={{ width: '18rem' }}>
          <Card.Img className='card-img-top' src={thumbnail} />
          <Card.Body className='card-color'>
            <Card.Title className='overflow-hidden'>{title}</Card.Title>
          </Card.Body>
          <div className='card-footer bg-dark d-flex justify-content-between'>
            <div className='rating'>{renderStars(rating)}</div>
            <div className='text-white'>{price}$</div>
          </div>
        </Card>
      </a>
    </div >
  );
}

export function renderStars(rating) {
  const maxRating = 5; // Assuming the maximum rating is 5
  const filledStars = Math.round(rating); // Get the number of filled stars
  const stars = [];

  // Add filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(<Icon.StarFill key={i} className="text-warning" />);
  }

  // Add unfilled stars
  for (let i = filledStars; i < maxRating; i++) {
    stars.push(<Icon.Star key={i} className="text-warning" />);
  }

  return stars;
}

export default ProductCard;
