import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

class ArchiveCard extends React.Component {
  render () {
    let { img, name, p1, p2, p3, bgColor, color } = this.props.artists;
    return (
        <section className='section-ab bg-color' style={{backgroundColor: bgColor}}>
          <Container className="first-section">
            <Row className="section-a-content">
              <h1 className='section-headline w-100' style={{color: color}}>{name}​​​</h1>
            </Row>

            <Row>
              <Col lg={4}>
                <Image src={img} alt={name} thumbnail style={{backgroundColor: color}}/>
              </Col>
              <Col lg={8}>
                <div className='archive-double-border-left content' style={{borderColor: color}}>
                  <p>{p1}</p>
                  <p>{p2}</p>
                  <p>{p3}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    )
  }
}

export default ArchiveCard;
