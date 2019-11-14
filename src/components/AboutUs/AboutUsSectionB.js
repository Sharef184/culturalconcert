import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutUsSectionB = () => {
  return (
    <section className='section-ab'>
      <Container className="first-section">
        <Row className="section-a-content">
          <h1 className='section-headline section-b-color w-100'>Prague Multicultural Music Project​​​</h1>
        </Row>

        <Row>
          <Col lg={6}>
            <div className='bg-color-b vimeo-video-container'>
              <iframe className='vimeo-video' src="https://player.vimeo.com/video/278534227?title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen" title="a" allowFullScreen></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Col>

          <Col lg={6}>
            <p className='content text-left double-border-left-b'>
            The plan for the first festival was completely supported by Debashish and Jana Chaudhuri and the project was a huge success, as witnessed by all musicians and audiences in attendance. The 2017 Inaugural PMMP festival featured a full-fledged symphony orchestra of about 70 musicians, in addition to performances of other genres such as world music ensembles, pop and rock groups.  These musicians came from all over, including Germany, New Zealand, China, Iraq, Syria, Algeria, Israel, Australia, South Africa, the United States, and the Czech Republic.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUsSectionB
