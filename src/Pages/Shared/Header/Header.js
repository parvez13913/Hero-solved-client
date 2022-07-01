import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../../images/logo/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <div className='d-flex align-items-center justify-content-center'>
                        <img className='header-logo' src={logo} alt="headerLogo" />
                        <h6 className='text-secondary fw-bold m-2'>ToDo List</h6>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/todo">Todo</Nav.Link>
                        <Nav.Link href="#pricing">Completed</Nav.Link>
                        <Nav.Link href="#pricing">Calender</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;