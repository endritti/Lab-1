import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export class userNavigation extends Component {
  render() {
    return (
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="movies">Movies</Nav.Link>
              <Nav.Link href="series">Series</Nav.Link>
              <Nav.Link href="genre">Genre</Nav.Link>
            </Nav>
            <Nav.Link href="/admin/movies">ADMIN</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}