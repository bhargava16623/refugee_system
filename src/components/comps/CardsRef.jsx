import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function CardsRef(props) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* holder.js/100px180 */}
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
s
      </Card.Body>
    </Card>
  );
}

export default CardsRef;