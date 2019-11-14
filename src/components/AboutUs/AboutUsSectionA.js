import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import LindaShea from './images/LindaShea.png'
import Elena from './images/Elena.png'
import Roman from './images/Roman.png'

const AboutUsSectionA = () => {
  return (
    <section >
      <Container>
        <Row className='section-a bg-color'>
          <Col md={6} className='double-border-left-a'>
            <h1 className='section-headline section-a-color'>Dr. Linda Shea</h1>
            <p className='content'>Director - Prague Multicultural Music Project</p>
            <p className='content'>
            Dr. Linda Shea earned a Doctorate of Musical Arts in clarinet performance and pedagogy from the University of Colorado Boulder in 2008. She earned her master's degree in clarinet from the University of Northern Colorado and her undergraduate degree from the Lamont School of Music at the University of Denver. Much of her career she has spent performing in the clarinet section of theColorado Springs Philharmonic, Greeley Philharmonic, Fort Collins Symphony, the Colorado Symphony Orchestra in Denver (sub) as well as a couple of seasons with the Santa Fe Opera Orchestra.</p>
          </Col>
          <Col md={6}>
            <Image className='about-us-section-a-image bg-color-a' src={LindaShea} alt="Linda Shea" thumbnail/>
          </Col>
        </Row>

        <Row className='section-a'>
          <Col md={6}>
            <Image className='about-us-section-a-image bg-color-b' src={Elena} alt="Elena Nezhdanova" thumbnail/>
          </Col>
          <Col md={6} className='double-border-left-b'>
            <h1 className='section-headline section-b-color'>Elena Nezhdanova</h1>
            <p className='content'>Artistic Director</p>
            <p className='content'>
            Much of her career she has spent performing in the clarinet section of theColorado Springs Philharmonic, Greeley Philharmonic, Fort Collins Symphony, the Colorado Symphony Orchestra in Denver (sub) as well as a couple of seasons with the Santa Fe Opera Orchestra.</p>
          </Col>
        </Row>

        <Row className='section-a bg-color'>
          <Col md={6} className='double-border-left-a'>
            <h1 className='section-headline section-a-color'>Roman Placzek</h1>
            <p className='content'>Artistic Director</p>
            <p className='content'>
            Much of her career she has spent performing in the clarinet section of theColorado Springs Philharmonic, Greeley Philharmonic, Fort Collins Symphony, the Colorado Symphony Orchestra in Denver (sub) as well as a couple of seasons with the Santa Fe Opera Orchestra.</p>
          </Col>
          <Col md={6}>
            <Image className='about-us-section-a-image bg-color-a' src={Roman} alt="Roman Placzek" thumbnail/>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default AboutUsSectionA
