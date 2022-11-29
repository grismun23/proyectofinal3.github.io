import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./acordeon/styles.css"
import FlushExample from './acordeon/index'



function Acordeon() {
  return (
      <div class="todo">
    <Container>
      <Row>
        <Col> 
        <div class="acord">
          <FlushExample/>
        </div>
        </Col>
        <Col>
        <div class="centrado">
        <img src ="https://pixabay.com/get/gcd5cc32d1f7fbdb5d769940c8ac84b8caf6455f63fec044158e2f426471a385daa74f7f8f22445cfa2a492cdfd8fb59d_640.jpg"/>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Acordeon;