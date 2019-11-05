import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArtistsCard from './ArtistsCard.js'
import Kinan from './images/Kinan.png'
import Rebecca from './images/Rebecca.png'
import Debashish from './images/Debashish.png'
import Cora from './images/Cora.png'
import Carpe from './images/Carpe.png'
import Michelle from './images/Michelle.png'
import Colorado from './images/Colorado.png'
import Stephen from './images/Stephen.png'
import AriAndAram from './images/AriAndAram.png'
import Dennis from './images/Dennis.png'
import Bertie from './images/Bertie.png'
import Daniel from './images/Daniel.png'
import Alfazz from './images/Alfazz.png'
import Organism from './images/Organism.png'
import Jeremy from './images/Jeremy.png'
import TheSwingCrew from './images/TheSwingCrew.png'

class ArtistsCardGroup extends React.Component {

    state = {
      artists: [
        {
          id: 1,
          img: Kinan,
          name: "Kinan Azmeh",
          description: "His utterly distinctive sound has gained him international recognition as  clarinetist and composer."
        },
        {
          id: 2,
          img: Rebecca,
          name: "Rebecca Phillips",
          description: "Dr. Phillips has served as a guest-conductor, clinician, and performer throughout North America, Europe, and Asia. "
        },
        {
          id: 3,
          img: Debashish,
          name: "Debashish Chaudhuri",
          description: "Debashish Chaudhuri´s musical experience and expression is a unique blend born in India."
        },
        {
          id: 4,
          img: Cora,
          name: "Cora Harnish",
          description: "Cellist, Cora Harnish, has been involved in the teaching and performing of Early Music since 1989."
        },
        {
          id: 5,
          img: Carpe,
          name: "Carpe Diem",
          description: "String Quartet."
        },
        {
          id: 6,
          img: Michelle,
          name: "Michelle Orman",
          description: "In addition to managing the CYSO, Michelle is a professional musician."
        },
        {
          id: 7,
          img: Colorado,
          name: "COLORADO YOUTH SYMPHONY",
          description: "The CYSO was founded in 1984 to provide orchestral experience for school-age musicians."
        },
        {
          id: 8,
          img: Stephen,
          name: "Stephen Dombrowski",
          description: "A native of Shrewsbury, Massachusetts, Stephen Dombrowski is Principal Tubist of the Colorado Symphony Orchestra."
        },
        {
          id: 9,
          img: AriAndAram,
          name: "Ari & Aram Mzori",
          description: "Violinists from Dahouk city, Iraqi Kurdistan."
        },
        {
          id: 10,
          img: Dennis,
          name: "Dennis Reifsteck",
          description: "Accomplished musician celebrating 40 years as bandleader of The Swing Crew."
        },
        {
          id: 11,
          img: Bertie,
          name: "Bertie Canepa Reifsteck ",
          description: "Bertie has choreographed numerous professional, community, college and high school musical theatre productions."
        },
        {
          id: 12,
          img: Daniel,
          name: "Daniel Zappi",
          description: "Anglo-Italian educator and performing artist."
        },
        {
          id: 13,
          img: Alfazz,
          name: "Alfazz - Sharif Khlief",
          description: "Middle east music, Jazz, Music full of feelings."
        },
        {
          id: 14,
          img: Organism,
          name: "Organism - Daniel Bulatkin",
          description: "Daniel Bulatkin is a new face on the Czech jazz scene."
        },
        {
          id: 15,
          img: Jeremy,
          name: "Jeremy Chapman",
          description: "Flute soloist grew up in Lebanon where he returned in his 20s to teach and play music."
        },
        {
          id: 16,
          img: TheSwingCrew,
          name: "The Swing Crew",
          description: "Fun is the bottom line with this interactive, acoustic band."
        }
      ]
    }

  render () {
    let artistsCards = this.state.artists.map(artists => {
      return (
        <Col sm="6" md="4" lg="3">
          <ArtistsCard key={artists.id} artists={artists} />
        </Col>
      )
    })
    return (
      <div className="bg-color">
      <Container>
        <Row noGutters className='pb-5'>
          {artistsCards}
        </Row>
      </Container>
      </div>
    )
  }
}

export default ArtistsCardGroup;
