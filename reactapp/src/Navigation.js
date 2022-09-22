import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/admin/movies">Movies</Nav.Link>
                            <Nav.Link href="/admin/series">Series</Nav.Link>
                            <Nav.Link href="/admin/genre">Genre</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
