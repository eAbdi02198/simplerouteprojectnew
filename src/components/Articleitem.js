import React from 'react'
import './Articleitem.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Articleitem({name,cover,id,price}) {
  return (
    <div>
        <Card >
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         
          <p>{price}</p>
        </Card.Text>
    <Link to={`/course/${id}`}>خرید دوره</Link>
      </Card.Body>
    </Card>
    </div>
  )
}
