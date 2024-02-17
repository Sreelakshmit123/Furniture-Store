import React from 'react'
import landingImg from '../assets/Images/landingImg.png'
import discountImg from '../assets/Images/discountImg.png'
import { Button, Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'



function Home() {
  return (

    <>

      {/* landing page */}
      <div style={{ width: '100%', height: '80vh', backgroundColor: "" }} className='bg-body-secondary'>
        <div style={{ height: '100%' }} className='container'>
          <div style={{ height: '100%' }} className="row align-items-center ">
            <div className="col-lg-5 " >
              <h1><b>START BUYING </b><br /><span className='text-danger'><b> ONLINE! </b></span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam necessitatibus facere iste repellat expedita harum repellendus. Dignissimos, sequi alias. Iste, laborum. Quibusdam ad vitae voluptate perferendis saepe veniam atque.</p>
              <Button>SHOP NOW</Button>
            </div>
           <div className='col-lg-1'></div>
            <div className="col-lg-6   mb-5" >
              <img  className='img '  style={{height:'100%'}} src={landingImg} alt="No image" />
            </div>
          </div>
        </div>
      </div>
      {/* new arraivals cards */}

      <h1 className='mt-5 ps-5'> New Arrivals</h1>
      <Container>
        <Row className='mt-5 mb-5  d-flex justify-content-around'>

          <Col className='mb-5' sm>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '15rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3d3d-bST863HnHxiZC8pZ3cVRmCD6-oxk4frUfWnCqQItlWBIJpjSYa9VxrgwAelcLW24GE1_NkxAZwAOF22sxxFZPjHCgn_CCBNjthxGMBKLkvJ0UTFA&usqp=CAE" />
              <Card.Body >
                <Card.Title>1 Door Wardrobes </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam illo incidunt laudantium, enim vero illos
                </Card.Text>
                <div className='d-flex justify-content-between '>
                  <Button variant="primary">BUY NOW</Button>
                  <i style={{ fontSize: '20px', color: 'black' }} className="fa-solid fa-heart  mt-2 me-3 "></i>

                </div>
              </Card.Body>
            </Card>
          </Col>



          <Col className='mb-5' sm>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '15rem' }} variant="top" src="https://lmsin.net/cdn-cgi/image/h=750,w=750,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000012537472-1000012537471_01-2100.jpg" />
              <Card.Body >
                <Card.Title>Aprilla NXT Half Leather Sofa </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, blanditiis doloremque
                </Card.Text>
                <div className='d-flex justify-content-between '>
                  <Button variant="primary">BUY NOW</Button>
                  <i style={{ fontSize: '20px', color: 'black' }} className="fa-solid fa-heart  mt-2 me-3 "></i>

                </div>
              </Card.Body>
            </Card>

          </Col>

          <Col className='mb-5' sm>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '15rem' }} variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVndf_ZWR63y_UTkT36y9oYqcZSUMM5v-N2AHJV3lwSSlLm0CXd2OpeoMkkbHfDLXLt_F7OzRLL8HScQKmp_Qwp2VG8oagntSTTEf8r2U&usqp=CAE" />
              <Card.Body >
                <Card.Title>Howler Bed With Side Storage</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quaerat velit accusantium est
                </Card.Text>
                <div className='d-flex justify-content-between '>
                  <Button variant="primary">BUY NOW</Button>
                  <i style={{ fontSize: '20px', color: 'black' }} className="fa-solid fa-heart  mt-2 me-3 "></i>

                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col className='mb-1' sm>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '15rem' }} variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSXagHkAOsGimbwbEM7R4ApNq6DhrHCFTMir3pQxe2kANTZjVhlBF7cIDmzB9zTB5hNK715t2iyDJU_d0u13Bkh7TsHLN_GnKhRAYU_bxc&usqp=CAE" />
              <Card.Body >
                <Card.Title>Erin Console Table</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit itaque ipsum cum

                </Card.Text>
                <div className='d-flex justify-content-between '>
                  <Button variant="primary">BUY NOW</Button>
                  <i style={{ fontSize: '20px', color: 'black' }} className="fa-solid fa-heart  mt-2 me-3 "></i>

                </div>
              </Card.Body>
            </Card>
          </Col>
          <a className='text-danger d-flex justify-content-center' href="">View More <i className="fa-solid fa-arrow-right text-danger mt-1 ms-2 "></i></a>

        </Row>

      </Container>

      {/* categories */}
      <h1 className='ps-5 mb-5'>Categories</h1>

      <Container className='mb-5'>
        <Row>
      
        <OverlayTrigger overlay={<Tooltip style={{height:'30px'}} id="tooltip-disabled">OUTDOOR FURNITURE</Tooltip>}>
          <Col sm={8}><img style={{ width: '100%', height: '50vh' }} src="https://www.outdoorfurnitureindia.in/images/banner2.jpg" alt="" /></Col>
          </OverlayTrigger>
       

          <OverlayTrigger overlay={<Tooltip  style={{height:'30px'}} id="tooltip-disabled">CHAIRS</Tooltip>}>
          <Col sm={4}><img style={{ width: '100%', height: '50vh' }} src="https://hips.hearstapps.com/hmg-prod/images/457217-garett-aw20-64599935f0e0e.jpg?crop=1.00xw:0.752xh;0,0.236xh&resize=640:*" alt="" /></Col>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip  style={{height:'30px'}} id="tooltip-disabled">SOFAS</Tooltip>}>
          <Col sm><img style={{ width: '100%', height: '50vh' }} src="https://static.wixstatic.com/media/50db48_46d5f67494a64dce98d8a02929bcd082~mv2.jpg/v1/fill/w_640,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/furniture%20in%20vijayawada.jpg" alt="" /></Col>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip  style={{height:'30px'}} id="tooltip-disabled">SIDEBOARD FURNITURE</Tooltip>}>
          <Col sm><img style={{ width: '100%', height: '50vh' }} src="https://imgmedia.lbb.in/media/2020/04/5ea6933a96c7e66079ec5780_1587974970911.jpg" alt="" /></Col>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip  style={{height:'30px'}} id="tooltip-disabled">BEDS</Tooltip>}>
          <Col sm><img style={{ width: '100%', height: '50vh' }} src="https://www.urbanwood.in/assets/image/trending-item/img-1.jpg" alt="" /></Col>
          </OverlayTrigger>

        </Row>
      </Container>
      {/* discount option */}

      <div style={{ width: '100%', height: '80vh', backgroundColor: "black"}}  className='rounded'>
        <div style={{ height: '100%' }} className='container  '>
          <div style={{ height: '100%' }} className="row align-items-center ">
            <div className="col-lg-5   " >
              <h1 className='text-light'><b> Discount Up To  </b><br /><span className='text-light'><b> 30% Off Today! </b></span></h1>
              <Button className='bg-light' style={{color:'black'}}><b> View Products </b></Button>
            </div>
            <div className="col-lg-7  " >
              <img className='img rounded' style={{height:'60vh',width:'100%'}} src={discountImg} alt="No image" />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <h1 className='d-flex justify-content-center mt-3 mb-5  '>Our Reviews</h1>
    <Container className=' d-flex justify-content-around'>
      <Row  className='mb-5  '>
       
          <Col sm>
              <Card className='rounded border-dark mb-3' style={{ width: '19rem' }}>
              <Card.Body>
                <Card.Title className='mb-3' ><b>Mike J</b></Card.Title>
                <Card.Subtitle className="mb-4 "><i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> </Card.Subtitle>
                <Card.Text  className="mb-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore omnis odio mollitia nostrum,  
                </Card.Text>
             
              </Card.Body>
            </Card>
          </Col>
    
        <Col sm>
            <Card className='rounded border-dark mb-3' style={{ width: '19rem' }}>
              <Card.Body style={{backgroundColor:'black '}}  className='text-light'>
                <Card.Title className='mb-3' ><b>Tina T</b></Card.Title>
                <Card.Subtitle className="mb-4 "><i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> </Card.Subtitle>
                <Card.Text  className="mb-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore omnis odio mollitia nostrum,  
                </Card.Text>
             
              </Card.Body>
            </Card>
      
        </Col>
         <Col sm>
            <Card className='rounded border-dark mb-3 ' style={{ width: '19rem' }}>
              <Card.Body>
                <Card.Title className='mb-3'><b>Jeena V</b></Card.Title>
                <Card.Subtitle className="mb-4 "><i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> </Card.Subtitle>
                <Card.Text  className="mb-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore omnis odio mollitia nostrum,  
                </Card.Text>
             
              </Card.Body>
            </Card>

         </Col>
         <Col sm>
            <Card className='rounded border-dark mb-3' style={{ width: '19rem' }}>
              <Card.Body style={{backgroundColor:'black '}}  className='text-light'>
                <Card.Title className='mb-3' ><b>Nita S</b></Card.Title>
                <Card.Subtitle className="mb-4 "><i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> <i style={{color:'gold'}} class="fa-solid fa-star"></i> </Card.Subtitle>
                <Card.Text  className="mb-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore omnis odio mollitia nostrum,  
                </Card.Text>
             
              </Card.Body>
            </Card>
      
        </Col>
        
      </Row>
    </Container>
    </>
  )
}

export default Home