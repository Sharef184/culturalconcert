import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutUsSectionB = () => {
  return (
    <section className='section-ab'>
      <Container className="first-section">
        <Row className="section-a-content">
          <h1 className='section-b-headline w-100'>Prague Multicultural Music Project​​​</h1>
        </Row>

        <Row>
          <Col lg={6}>
            <div className='bg-color-b test1'>
              <iframe className='test2' src="https://player.vimeo.com/video/278534227?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" title="a" allowfullscreen></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Col>
          
          <Col lg={6}>
            <p className='content text-left double-border-left-b'>
            After witnessing this, the idea began to brew between the founder of the PMMP and Lenka Cerna, the manager for a Czech orchestral conductor from India named Debashish Chaudhuri, and his wife Jana Chaudhuri, a world-class Czech pianist. The plan initiated out of a desire to bring together people from different cultures to interact through various music rehearsals, concerts, clinics, etc. and to gain new understanding and acceptance of similarities and differences.
            The plan for the first festival was completely supported by Debashish and Jana Chaudhuri and the project was a huge success, as witnessed by all musicians and audiences in attendance. The 2017 Inaugural PMMP festival featured a full-fledged symphony orchestra of about 70 musicians, in addition to performances of other genres such as world music ensembles, pop and rock groups.  These musicians came from all over, including Germany, New Zealand, China, Iraq, Syria, Algeria, Israel, Australia, South Africa, the United States, and the Czech Republic.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUsSectionB
