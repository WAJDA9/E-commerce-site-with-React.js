import React, {useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row,  Image, ListGroup, Card, Button, Col, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../components/Product'
const ProductScreen = () => {
  let match = useParams();
  const product = products.find((p) => p._id === match.id)
  return <>
   <Link className='btn btn-dark my-3' to="/">GO Back </Link>
   <Row>
     <Col md={6}>
      <Image src={product.image} alt={product.name} fluid></Image>
       </Col>
       <Col md={3}>
      <ListGroup variant='flush' >
        <ListGroupItem>
          <h3>{product.name}</h3>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </ListGroupItem>
        <ListGroupItem>
        Price: ${product.price}
    
        </ListGroupItem>
        <ListGroupItem>
        Description: ${product.description}
    
        </ListGroupItem>
      </ListGroup>
       </Col>
       <Col md={3}>
         <Card>
           <ListGroup variant='flush'>
             <ListGroupItem>
               <Row>
                 <Col>
                 Price:
                 </Col>
                 <Col>
                 <strong>${product.price}</strong>
                 </Col>
               </Row>
             </ListGroupItem>

             <ListGroupItem>
               <Row>
                 <Col>
                 status:
                 </Col>
                 <Col>
                 {product.countInStock > 0 ? 'In Stock': 'Out Of Stock'}
                 </Col>
               </Row>
             </ListGroupItem>

             <ListGroupItem>
               <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                 Add To Cart
               </Button>
             </ListGroupItem>


           </ListGroup>
         </Card>
       </Col>
   </Row>
   </>
}

export default ProductScreen