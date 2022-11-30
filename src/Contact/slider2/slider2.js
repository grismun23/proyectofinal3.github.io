import React from 'react';
import './slider2.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


function Slider2() {
    return (
        <Container className="habitad">
        <Row className="justify-content-md-center"> 
        <Col xs={6}>
        <div class="text">
         <h2>Hábitad Natural</h2>
         <p>El hábitat puede ser considerado como la suma de los factores del medio ambiente que una especie animal o vegetal requiere para sobrevivir y reproducirse en un área dada. La combinación de factores bióticos y abióticos dentro de una unidad de vegetación que tiene influencia en el ciclo de vida de los animales.</p>
        </div>
        </Col>
        <Col xs={6}>
      <div class="introslider">
        <div class="innerslider">
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1586957469525-7850e7bef283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1535940360221-641a69c43bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
      </Col>
      </Row>
      </Container>

    );
}

export default Slider2