import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";

const Wrapper = styled.div``;

const Logo = styled.img`
  width: 100px;
`;

const BtnItem = styled.span`
  color: #fff;
  transition: color 0.3s;
  &:hover {
    color: #dc143c;
  }
`;

const Navigation = () => {
  return (
    <Navbar variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to="/">
                <BtnItem>Home</BtnItem>
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link to="/movie">
                <BtnItem>Movie</BtnItem>
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
