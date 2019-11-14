import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HomeVideosContainer = () => {
  return (
    <section className='section-ab bg-color'>
      <Container className="first-section">
        <Row className="section-a-content">
          <h1 className='section-headline section-b-color w-100'>What We Do...</h1>
        </Row>

        <Row>
          <Col lg={6}>
            <div className='bg-color-b vimeo-video-container'>
              <iframe className='vimeo-video' src="https://player.vimeo.com/video/369852837?title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen" title="a" allowFullScreen></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Col>

          <Col lg={6}>
            <div className='bg-color-b vimeo-video-container'>
              <iframe className='vimeo-video' src="https://player.vimeo.com/video/368586451?title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen" title="b" allowFullScreen ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeVideosContainer
