import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VideosCard from './VideosCard.js'
import Kinan from './videos/Kinan.png'
import Rebecca from './videos/Rebecca.png'
import Debashish from './videos/Debashish.png'
import Cora from './videos/Cora.png'
import Carpe from './videos/Carpe.png'
import Michelle from './videos/Michelle.png'
import Colorado from './videos/Colorado.png'
import Stephen from './videos/Stephen.png'
import AriAndAram from './videos/AriAndAram.png'
import Dennis from './videos/Dennis.png'
import Bertie from './videos/Bertie.png'
import Daniel from './videos/Daniel.png'
import Alfazz from './videos/Alfazz.png'
import Organism from './videos/Organism.png'
import Jeremy from './videos/Jeremy.png'
import TheSwingCrew from './videos/TheSwingCrew.png'

class VideosCardGroup extends React.Component {

    state = {
      videos: [
        {
          id: 1,
          img: Kinan,
          name: "Kinan Azmeh",
          description: "Clarinetist and composer."
        },
        {
          id: 2,
          img: Rebecca,
          name: "Rebecca Phillips",
          description: "Guest-conductor, clinician, and performer throughout North America, Europe, and Asia. "
        },
        {
          id: 3,
          img: Debashish,
          name: "Debashish Chaudhuri",
          description: "Musical experience and expression is a unique blend born in Calcutta."
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
          description: "Principal Tubist of the Colorado Symphony Orchestra."
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
          description: "Accomplished musician celebrating 40 years as bandleader of The Swing Crew."
        },
        {
          id: 12,
          img: Daniel,
          name: "Daniel Zappi",
          description: "Anglo-italian educator and performing artist."
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
    let videosCards = this.state.videos.map(videos => {
      return (
        <Col sm="6" md="4" lg="3">
          <VideosCard key={videos.id} videos={videos} />
        </Col>
      )
    })
    return (
      <div className="bg-color">
      <Container>
        <h1 className='section-headline text-center' id="artists-section-headline">Videos</h1>
        <Row noGutters className='pb-5'>
          {videosCards}
        </Row>
      </Container>
      </div>
    )
  }
}

export default VideosCardGroup;
