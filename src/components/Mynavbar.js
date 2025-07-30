import React from 'react'
import './Mynavbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

export default function Mynavbar() {
    const expand="md"
  return (
    <div>
        <Navbar key={expand} expand={expand} className="bg-primary mb-3">
          <Container >
            <Navbar.Brand href="#">نکست وان کد</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
        نکست وان کد
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className='man'>صفحه اصلی</NavLink>
                  <NavLink to="/about" className='man'>درباره ما</NavLink>
                  <NavLink to="/article" className='man'>مقالات</NavLink>
                  <NavLink to="/panel" className='man'>پنل</NavLink>
                  <NavLink to="/login" className='man'>لاگین</NavLink>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}
