import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MroTips from './images/mro-tips.png'
import SoftwareDirectory from './images/software-directory.png'
import Caterpillar from './images/caterpillar.png'

const HomeSectionB = () => {
  return (
    <section className='section-b text-center'>
      <h1 className='section-headline'>Partners & Sponsors​​​</h1>
      <p className='content'>We would like to acknowledge our partners, <b>Thanks.</b></p>
      <Container>
        <Row className='partners'>
          <Col xs="12" sm="4">
            <a target="_blank" rel="noopener noreferrer" href="https://mro.tips">
              <img className='py-5' src={MroTips} alt="mro.tips"/>
            </a>
          </Col>
          <Col xs="12" sm="4">
            <a target="_blank" rel="noopener noreferrer" href="https://software-directory.net">
              <img src={SoftwareDirectory} alt="software-directory"/>
            </a>
          </Col>
          <Col xs="12" sm="4">
            <a target="_blank" rel="noopener noreferrer" href="https://www.caterpillar.com/en.html">
              <img className='py-5' src={Caterpillar} alt="caterpillar"/>
            </a>
          </Col>
        </Row>
      </Container>
      <Button variant="danger">Become Our Partner</Button>
    </section>
  )
}

export default HomeSectionB
