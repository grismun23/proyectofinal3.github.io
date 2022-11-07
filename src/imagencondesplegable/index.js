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
        <img src ="https://pixabay.com/get/g3752bed54eceae8691ab1fcd3115c57bb2167df44dc6784275702c7f1425d25aae4bffff9cd79c050ba748803c08d082d67464e93bafb5c17c9f908188afa6df759e28503c0ef803ae7c1a64ec66c0c2_640.jpg"/>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Acordeon;