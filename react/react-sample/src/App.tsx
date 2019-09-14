import React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import ReactRouterOnly from './page/ReactRouterOnly';
import { Route } from 'react-router-dom';

const App: React.FC = () => {
  return (<>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/react-router-only">React Router</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Route path="/react-router-only" component={ReactRouterOnly} />
  </>);
}

export default App;
