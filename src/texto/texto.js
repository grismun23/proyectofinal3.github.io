import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AutoLayoutExample() {
    return (
        <Container>
        <Row>
        <Col>
        <div class="izquierda">
        </div>
        </Col>
        <Col>
      <div class="intro">
        <div class="inner">
            <h2 class="wb">LA VIDA</h2>
            <h2 class="wb2">SILVESTRE</h2>
            <p> Los animales salvajes y las plantas silvestres, además de su valor intrínseco, contribuyen a los aspectos ecológicos, genéticos, sociales, económicos, científicos, educativos, culturales, recreativos y estéticos del bienestar humano y el desarrollo sostenible.</p>
        </div>
      </div>
      </Col>
      </Row>
      </Container>

    );
}

export default AutoLayoutExample
