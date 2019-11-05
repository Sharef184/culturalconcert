// Save la HomeSectionA el adem
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ConcertImg from './images/1.png'

const HomeSectionA = () => {
  return (
  <section className='section-a bg-color' id='section-a'>
    <Container>
      <Row className="section-a-content">
        <h1 className='section-headline w-100'>"Bridging Cultures Through Music"​​​</h1>
      </Row>

      <Row>
        <Col lg={6}>
          <p className='content double-border-left'>Sunday, June 16 St. Nicholas Church 2 PM​ PRAGUE MULTICULTURAL ORCHESTRA
          featuring Kinan Azmeh, clarinet​ Conductor: Debashish Chauduri
          SUITES, DANCES, AND OVERTURES
          Glinka - Ruslan and Ludmilla
          Grieg - Holberg Suite
          Dvorák - Carnival Overture
          Kinan Azmeh- Suite for Improvisor and Orchestra
          Copland - Hoedown
          J Williams - Schindler’s List
          Dvorák - Slavonic Dance op 46 No 8
          The 2019 Prague Multicultural Music Project festival brings together musicians
          from as far away as Ireland, Iraq, New Zealand, the Czech Republic, and the U.S.
          </p>
        </Col>

        <Col lg={6}>
          <Image src={ConcertImg} alt="Concert" thumbnail/>
        </Col>
      </Row>

      <Row className="section-a-content">
        <h1 className='section-headline w-100'>"Bridging Cultures Through Music"​​​</h1>
      </Row>

      <Row>
        <Col lg={6}>
          <Image src={ConcertImg} alt="Concert" thumbnail/>
        </Col>

        <Col lg={6}>
          <p className='content double-border-left'>Sunday, June 16 St. Nicholas Church 2 PM​ PRAGUE MULTICULTURAL ORCHESTRA
          featuring Kinan Azmeh, clarinet​ Conductor: Debashish Chauduri
          SUITES, DANCES, AND OVERTURES
          Glinka - Ruslan and Ludmilla
          Grieg - Holberg Suite
          Dvorák - Carnival Overture
          Kinan Azmeh- Suite for Improvisor and Orchestra
          Copland - Hoedown
          J Williams - Schindler’s List
          Dvorák - Slavonic Dance op 46 No 8
          The 2019 Prague Multicultural Music Project festival brings together musicians
          from as far away as Ireland, Iraq, New Zealand, the Czech Republic, and the U.S.
          </p>
        </Col>
      </Row>

      <Row className="section-a-content">
        <h1 className='section-headline w-100'>"Bridging Cultures Through Music"​​​</h1>
      </Row>

      <Row>
        <Col lg={6}>
          <p className='content double-border-left'>Sunday, June 16 St. Nicholas Church 2 PM​ PRAGUE MULTICULTURAL ORCHESTRA
          featuring Kinan Azmeh, clarinet​ Conductor: Debashish Chauduri
          SUITES, DANCES, AND OVERTURES
          Glinka - Ruslan and Ludmilla
          Grieg - Holberg Suite
          Dvorák - Carnival Overture
          Kinan Azmeh- Suite for Improvisor and Orchestra
          Copland - Hoedown
          J Williams - Schindler’s List
          Dvorák - Slavonic Dance op 46 No 8
          The 2019 Prague Multicultural Music Project festival brings together musicians
          from as far away as Ireland, Iraq, New Zealand, the Czech Republic, and the U.S.
          </p>
        </Col>

        <Col lg={6}>
          <Image src={ConcertImg} alt="Concert" thumbnail/>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default HomeSectionA





















import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionA from './SectionA.js'
import SectionB from './SectionB.js'
import ConcertImg from './images/1.png'

class HomeSectionA extends React.Component {

    state = {
      sectionsAB: [
        {
          id: 1,
          sectionAh1: 'Bridging Cultures Through Music',
          sectionAp: 'Sunday, June 16 St. Nicholas Church 2 PM​ PRAGUE MULTICULTURAL ORCHESTRA featuring Kinan Azmeh, clarinet​ Conductor: Debashish Chauduri SUITES, DANCES, AND OVERTURES Glinka - Ruslan and Ludmilla Grieg - Holberg Suite Dvorák - Carnival Overture Kinan Azmeh- Suite for Improvisor and Orchestra Copland - Hoedown J Williams - Schindler’s List Dvorák - Slavonic Dance op 46 No 8 The 2019 Prague Multicultural Music Project festival brings together musicians from as far away as Ireland, Iraq, New Zealand, the Czech Republic, and the U.S.',
          sectionAimg: ConcertImg,
          sectionAimgName: 'Concert',
          sectionBh1: 'B',
          sectionBp: 'B',
          sectionBimg: ConcertImg,
          sectionBimgName: 'B'
        },
        {
          id: 2,
          sectionAh1: 'Bridging Cultures Through Music',
          sectionAp: 'Sunday, June 16 St. Nicholas Church 2 PM​ PRAGUE MULTICULTURAL ORCHESTRA featuring Kinan Azmeh, clarinet​ Conductor: Debashish Chauduri SUITES, DANCES, AND OVERTURES Glinka - Ruslan and Ludmilla Grieg - Holberg Suite Dvorák - Carnival Overture Kinan Azmeh- Suite for Improvisor and Orchestra Copland - Hoedown J Williams - Schindler’s List Dvorák - Slavonic Dance op 46 No 8 The 2019 Prague Multicultural Music Project festival brings together musicians from as far away as Ireland, Iraq, New Zealand, the Czech Republic, and the U.S.',
          sectionAimg: ConcertImg,
          sectionAimgName: 'Concert',
          sectionBh1: 'B',
          sectionBp: 'B',
          sectionBimg: ConcertImg,
          sectionBimgName: 'B'
        }
      ]
    }

  render () {

    let sectionA = this.state.sectionsAB.map(sectionA => {
      return (
        <div>
          <SectionA key={sectionA.id} sectionA={sectionA} />
          <SectionB key={sectionA.id} sectionA={sectionA} />
        </div>
      )
    })



    return (

      <div id='section-a'>
        {sectionA}
      </div>

    )
  }
}

export default HomeSectionA;
