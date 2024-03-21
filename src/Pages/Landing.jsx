import React from 'react'
import { Row ,Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-centerr w-100'>
      <Col></Col>
      <Col lg={5}>
        <h2 style={{textAlign:'justify'}} >Welcome to <span className='text-warning'>Musiq World</span></h2>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam itaque quis quam, voluptates ab non est fugit tenetur deleniti aliquid iure libero esse sint pariatur sequi eos quod. Eligendi.</p>

        <Link to={'./home'}>
        <button className='btn bg-none btn-success '>Get Started</button>
        </Link>
      </Col>
      <Col lg={5}>
        <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/756/173/datas/original.gif" alt="" width={500} className='rounded'/>
      </Col>
      <Col></Col>
    </Row>

      <div className="container bg-success mb-5 mt-5 d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-light'>Features</h1>
        <div className="cards d-flex p-5 justify-content-between w-100 border-1">
        <Card  style={{ width: '18rem' ,padding:'10px'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/f8/df/e3/f8dfe37d4c8c486a24de08a5100b128f.jpg"  height={200} />
      <Card.Body>
        <Card.Title>Managing Player</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',padding:'10px' }}>
      <Card.Img variant="top" src="https://plugins-media.makeupar.com/smb/blog/post/2023-06-26/8e47a766-d6a9-4319-89da-f627c228e554.jpg" height={200} />
      <Card.Body>
        <Card.Title>Categorized Songs</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',padding:'10px' }}>
      <Card.Img variant="top" src="https://image-us.samsung.com/SamsungUS/support/solutions/mobile/phones/galaxy-s/s23/PH_S23_Handy-spotify-features-on-your-Galaxy-phone-or-tablet.png" height={200} />
      <Card.Body>
        <Card.Title>Watching History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
      </div>

      <div className='container p-4 border rounded border-dark mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className="col-lg-5">
          <h3 className='text-success '>Simple & Powerful </h3>
          <h6 className='mb-5'><span className='text-dark fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque cumque harum nesciunt, ab a possimus saepe fuga voluptas magnam officia commodi? Nihil eaque, porro autem ipsam perspiciatis ad totam!</h6>
          <h6 className='mb-5'><span className='text-dark fs-5 fw-bolder'>Categorize Song</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque cumque harum nesciunt, ab a possimus saepe fuga voluptas magnam officia commodi? Nihil eaque, porro autem ipsam perspiciatis ad totam!</h6>
          <h6 className='mb-5'><span className='text-dark fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque cumque harum nesciunt, ab a possimus saepe fuga voluptas magnam officia commodi? Nihil eaque, porro autem ipsam perspiciatis ad totam!</h6>

        </div>

        <div className="col-lg-5">
        <iframe width="400" height="300" src="https://www.youtube.com/embed/beaMXlMDMCM?si=hhpPWdcnbLOaYe9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      </div>
    
    </>
  )
  
}

export default Landing