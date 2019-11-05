import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

class SectionB extends React.Component {
  render () {
    let { sectionBh1, sectionBp, sectionBimg, sectionBimgName } = this.props.sectionAB;
    return (
      <section className='section-ab'>
        <Container className="first-section">
          <Row className="section-a-content">
            <h1 className='section-b-headline w-100'>{sectionBh1}​​​</h1>
          </Row>

          <Row>
            <Col lg={6}>
              <Image src={sectionBimg} alt={sectionBimgName} thumbnail className='bg-color-b'/>
            </Col>

            <Col lg={6}>
              <p className='content double-border-left-b'>{sectionBp}</p>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default SectionB;
