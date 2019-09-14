import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Route } from 'react-router';

const ReactRouterOnly: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={3} >
            <Navbar className="flex-column" variant="dark" bg="dark">
              <Navbar.Brand>React Router Only</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav-pills" />
              <Navbar.Collapse id="navbar-nav-pills">
                <Nav className="flex-column" variant="pills">
                  <Nav.Link href="/react-router-only/hoge1">Hoge1</Nav.Link>
                  <Nav.Link href="/react-router-only/hoge2">Hoge2</Nav.Link>
                  <Nav.Link href="/react-router-only/hoge3">Hoge3</Nav.Link>
                  <Nav.Link href="/react-router-only/hoge4">Hoge4</Nav.Link>
                  <Nav.Link href="/react-router-only/hoge5">Hoge5</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col sm={8}>
            <Route path="/react-router-only/hoge1" component={() => <h1>Hoge1</h1>} />
            <Route path="/react-router-only/hoge2" component={() => <h1>Hoge2</h1>} />
            <Route path="/react-router-only/hoge3" component={() => <h1>Hoge3</h1>} />
            <Route path="/react-router-only/hoge4" component={() => <h1>Hoge4</h1>} />
            <Route path="/react-router-only/hoge5" component={() => <h1>Hoge5</h1>} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReactRouterOnly;