import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Route } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const ReactRouterBootstrap: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={3} >
            <Navbar className="flex-column">
              <Navbar.Brand>React Router Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav-pills" />
              <Navbar.Collapse id="navbar-nav-pills">
                <Nav className="flex-column" variant="pills">
                  <LinkContainer to="/react-router-bootstrap/hoge1"><div>Hoge1</div></LinkContainer>
                  <LinkContainer to="/react-router-bootstrap/hoge2"><div>Hoge2</div></LinkContainer>
                  <LinkContainer to="/react-router-bootstrap/hoge3"><div>Hoge3</div></LinkContainer>
                  <LinkContainer to="/react-router-bootstrap/hoge4"><div>Hoge4</div></LinkContainer>
                  <LinkContainer to="/react-router-bootstrap/hoge5"><div>Hoge5</div></LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col sm={8}>
            <Route path="/react-router-bootstrap/hoge1" component={() => <h1>Hoge1</h1>} />
            <Route path="/react-router-bootstrap/hoge2" component={() => <h1>Hoge2</h1>} />
            <Route path="/react-router-bootstrap/hoge3" component={() => <h1>Hoge3</h1>} />
            <Route path="/react-router-bootstrap/hoge4" component={() => <h1>Hoge4</h1>} />
            <Route path="/react-router-bootstrap/hoge5" component={() => <h1>Hoge5</h1>} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReactRouterBootstrap;