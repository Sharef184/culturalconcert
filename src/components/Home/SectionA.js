import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

class SectionA extends React.Component {
  render () {
    let { sectionAh1, sectionAp, sectionAimg, sectionAimgName } = this.props.sectionAB;
    return (
      <section className='section-ab bg-color'>
        <Container className="first-section">
          <Row className="section-a-content">
            <h1 className='section-headline section-a-color w-100'>{sectionAh1}​​​</h1>
          </Row>

          <Row>
            <Col lg={6}>
              <p className='content double-border-left-a'>{sectionAp}</p>
            </Col>

            <Col lg={6}>
              <Image src={sectionAimg} alt={sectionAimgName} thumbnail className='bg-color-a'/>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default SectionA;
