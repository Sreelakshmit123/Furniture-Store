import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';



function Header() {
  return (
   <>
  {['sm' ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-secondary ">
          <Container >
            <Navbar.Brand href="#"><img style={{height:'40px'}} src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210630-ytxhqfrxr8wb9qkhv6vy.png?crop=1:1,smart&width=250&dpr=2" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img style={{height:'40px'}} src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210630-ytxhqfrxr8wb9qkhv6vy.png?crop=1:1,smart&width=250&dpr=2" alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 ">
                  <Nav.Link> <Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><b>Home</b></Link></Nav.Link>
                  <Nav.Link href="#action2"><b>About Us</b></Nav.Link>
                  <Nav.Link href="#action2"><b>Furniture</b></Nav.Link>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className='pe-4' variant="outline-success">Search</Button>
                </Form>
                <Nav.Link className='btn rounded ps-5 pe-2 '>  
                
                <i style={{fontSize:'20px',color:'black'}} className="fa-regular fa-heart  mt-2 me-3 "></i>
                <i style={{fontSize:'20px',color:'black'}} className="fa-solid fa-cart-shopping  mt-2 me-3"></i>
                <i style={{fontSize:'20px',color:'black'}} className="fa-regular fa-user  "></i>
                  </Nav.Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
   </>
  )
}

export default Header