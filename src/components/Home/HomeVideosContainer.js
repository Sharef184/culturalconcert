import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HomeVideosContainer = () => {
  return (
    <section className='section-ab bg-color'>
      <Container className="first-section">
        <Row className="section-a-content">
          <h1 className='section-b-headline w-100'>What We Do...</h1>
        </Row>

        <Row>
          <Col lg={6}>
            <div className='bg-color-b test1'>
              <iframe className='test2' src="https://player.vimeo.com/video/369852837?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" title="a" allowfullscreen></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Col>

          <Col lg={6}>
            <div className='bg-color-b test1'>
              <iframe className='test2' src="https://player.vimeo.com/video/368586451?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" title="b" allowfullscreen ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeVideosContainer
