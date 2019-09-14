import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const App: React.FC = () => {
  return (<>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

    <Navbar>
      <Navbar.Toggle aria-controls="navbar-nav-pills" />
      <Navbar.Collapse id="navbar-nav-pills">
        <Nav className="flex-column" variant="pills" >
          <LinkContainer to="#hoge0">Hoge0</LinkContainer>
          <Nav.Link href="#hoge1">Hoge1</Nav.Link>
          <Nav.Link href="#hoge2">Hoge2</Nav.Link>
          <Nav.Link href="#hoge3">Hoge3</Nav.Link>
          <Nav.Link href="#hoge4">Hoge4</Nav.Link>
          <Nav.Link href="#hoge5">Hoge5</Nav.Link>
          <Nav.Link>Hoge11</Nav.Link>
          <Nav.Link>Hoge12</Nav.Link>
          <Nav.Link>Hoge13</Nav.Link>
          <Nav.Link>Hoge14</Nav.Link>
          <Nav.Link>Hoge15</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>);
}

export default App;
