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
            <h2 class="wb"> LOREM LOREM</h2>
            <h2 class="wb2">LOREM LOREM</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      </Col>
      </Row>
      </Container>

    );
}

export default AutoLayoutExample
