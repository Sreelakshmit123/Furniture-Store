import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'


function Footer() {
  return (
   <>
        <div className='bg-body-secondary '>


<div className='container w-100 h-100  mb-5 mt-5'>

  <div className="footer-content  d-flex justify-content-between">
    <Row>

      <Col sm >
        <div style={{ color: 'black' }} className="title ">
          <h4 style={{ height: '50px' }} className='d-flex'><img style={{height:'40px'}} src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210630-ytxhqfrxr8wb9qkhv6vy.png?crop=1:1,smart&width=250&dpr=2" alt="" /> Furniture</h4>
          <span style={{ height: '50px' }} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus accusantium, unde itaque quod tenetur sapiente magni at molestias velit illo recusandae obcaecati voluptatem sunt adipisci iste. Iusto, aliquid explicabo!</span><br />
        </div>
      </Col> 
      <Col sm  >
        <div className="links d-flex flex-column ">
          <h4 style={{ height: '55px', color: 'black' }}>Links</h4>
          <Link to={'/'} style={{ color: 'black' }} className='text-decoration-none'> Home</Link>
          <Link to={'/'} style={{ color: 'black' }} className='text-decoration-none'> About</Link>
          <Link to={'/'} style={{ color: 'black' }} className='text-decoration-none'>Furniture</Link>
        </div>
      </Col>
      <Col sm  >
        <div className="links d-flex flex-column ">
          <h4 style={{ height: '55px', color: 'black' }}>Products</h4>
          <Link to={'/'} style={{ color: 'black' }} className='text-decoration-none'> New Arrivals</Link>
          <Link to={'/'} style={{ color: 'black' }} className='text-decoration-none'> Popular</Link>
          <Link to={'/'} style={{ color: 'black' }} className='text-decoration-none'>Categories</Link>
        </div>
      </Col>
      <Col sm >
        <div style={{ color: 'black' }} className="contact">
          <h4 style={{ height: '55px' }}>Contact Us</h4>
          <div className='d-flex'>
            <input placeholder='Enter Your Mail' type="text" className="form-control" />
            <button className='btn btn-danger ms-2'><i class="fa-solid fa-arrow-right "></i></button>
          </div>
          <div style={{ color: 'black' }} className="icons mt-3 d-flex justify-content-between">
            <i style={{ height: '55px' }} class="fa-solid fa-envelope fa-2x"></i>
            <i style={{ height: '55px' }} class="fa-brands fa-twitter fa-2x"></i>
            <i style={{ height: '55px' }} class="fa-brands fa-facebook fa-2x"></i>
            <i style={{ height: '55px' }} class="fa-brands fa-instagram fa-2x"></i>
            <i style={{ height: '55px' }} class="fa-brands fa-linkedin fa-2x"></i>

          </div>
        </div>

      </Col>
    </Row>

  </div>
  <p style={{ color: 'black' }} className='text-center '>Copyright &copy; 2023 & All Rights Reserved by Books.</p>
</div>

</div>
   </>
  )
}

export default Footer