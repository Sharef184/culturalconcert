import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import LindaShea from './images/LindaShea.png'

const AboutUsSectionA = () => {
  return (
    <section className='section-a bg-color'>
      <Container>
        <Row>
          <Col md={6} className='double-border-left-a'>
            <h1 className='section-a-headline'>Dr. Linda Shea</h1>
            <p className='content'> Director - Prague Multicultural Music Project <br/>
            "Bridging Cultures Through Music"<br/>
            Workshops and performances culminating with concerts in Prague and the surrounding areas.
            </p>
          </Col>
          <Col md={6}>
            <Image className='center-m-img bg-color-a' src={LindaShea} alt="Linda Shea" thumbnail/>
          </Col>          
        </Row>
        <p className='content text-left'>
        Dr. Linda Shea earned a Doctorate of Musical Arts in clarinet performance and pedagogy from the University of Colorado Boulder in 2008. She earned her master's degree in clarinet from the University of Northern Colorado and her undergraduate degree from the Lamont School of Music at the University of Denver. Much of her career she has spent performing in the clarinet section of theColorado Springs Philharmonic, Greeley Philharmonic, Fort Collins Symphony, the Colorado Symphony Orchestra in Denver (sub) as well as a couple of seasons with the Santa Fe Opera Orchestra. As a guest artist, Linda has performed in recitals and with orchestras and bands in the U.S. as well as Central and South America.<br/>

        For the majority of her life, Dr. Shea has continued to strive for balance as both an academic and a performer. In fact, she spent her previous five years directing the bands and orchestras at Summit High School while at the same time teaching Music Appreciation and a Survey of World Music through Colorado Mountain College. Previously, Dr. Shea taught on faculty at the University of Colorado, Colorado State University and Southwestern Michigan Colleges as well as teaching band and orchestra at Cherry Creek High School. At the beginning of her career she started out teaching at several schools in the Cheyenne Mountain School District (Colorado Springs.)<br/>

        For the time being, Linda spends much of her time creating new musical opportunities, writing grants, traveling and continuing to teach as an Adjunct Professor at Foothill College in Cupertino California. She has two cats named Lucy and Benny, whom she adores.</p>
      </Container>
    </section>
  )
}

export default AboutUsSectionA
