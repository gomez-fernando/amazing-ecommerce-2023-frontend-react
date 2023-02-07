import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import logger from 'use-reducer-logger';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  })
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });

      try {
        const result = await axios.get('/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, [])

  return (
    <>
      <Helmet>
        <title>faShop</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger" >{error}</MessageBox>
        ) : (
          <Row>
            {products.map(product => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )
        }
      </div>
    </>
  )
}

export default HomeScreen;