import React from 'react'
import './css/Myprofile.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Myprofile = () => {
  return (
    <div className='body-cont'>
      <div className='rect-container'>
      </div>
      <div className='profile-cont'>
      </div>
      <div className='table-infos'>
        <Container>
          <Row className='r1'>
            <Col>Name</Col>
            <Col>Lorem ipsum </Col>
          </Row>
          <hr />
          <Row>
            <Col>Date of Birth</Col>
            <Col>02-10-2002</Col>
          </Row>
          <hr />
          <Row>
            <Col>Age</Col>
            <Col>20</Col>
          </Row>
          <hr />
          <Row>
            <Col>Gender</Col>
            <Col>Male</Col>
          </Row>
          <hr />
          <Row>
            <Col>Nationality</Col>
            <Col>Indian</Col>
          </Row>
          <hr />
          <Row className='r1'>
            <Col>Mobile Number</Col>
            <Col>9080980256</Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

