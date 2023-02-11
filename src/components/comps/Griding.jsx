import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsRef from './CardsRef';
import React from 'react';
//import Form from './Refugeesignupform'
function Griding() {

  return (
    <Container>
      <Row>
        <Col><CardsRef title="Card-1" src="#" description= "Fusce vitae elit eleifend, commodo quam vitae, efficitur libero. Donec ullamcorper luctus massa a egestas. Maecenas volutpat nec lorem sit amet volutpat" /></Col>
        <Col><CardsRef title="Card-2" src="#" description= "Quisque elit metus, suscipit quis metus sit amet, imperdiet eleifend diam. Pellentesque tincidunt libero nunc, id pulvinar dolor egestas eget."/></Col>
        <Col><CardsRef title="Card-3" src="#" description= "Vivamus nisi urna, mollis sit amet porttitor ac, pellentesque ut enim. Morbi vel ipsum suscipit, convallis ante sit amet, dictum ligula."/></Col>
      </Row>
    </Container>
  );
}

export default Griding;