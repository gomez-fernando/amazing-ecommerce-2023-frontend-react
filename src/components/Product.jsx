import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img className='card-img-top' src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>
          ${product.price}
        </Card.Text>
      </Card.Body>
      <Button>Add to cart</Button>
    </Card>
  )
}

export default Product