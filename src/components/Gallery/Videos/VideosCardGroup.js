import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VideosCard from './VideosCard.js'


class VideosCardGroup extends React.Component {

    state = {
      videos: [
        {
          id: 1,
          name: "Kinan Azmeh",
          src: "https://www.youtube.com/embed/LXia6PmeExo"
        },
        {
          id: 2,
          name: "Daniel Zappi",
          src: "https://www.youtube.com/embed/jGAcfYZvuBc"
        },
        {
          id: 3,
          name: "Debashish Chaudhuri",
          src: "https://www.youtube.com/embed/J1VtocRNP_o"
        },
        {
          id: 4,
          name: "Ari & Aram Mzori",
          src: "https://www.youtube.com/embed/41qmX0wr-CE"
        },
        {
          id: 5,
          name: "Organism - Daniel Bulatkin",
          src: "https://www.youtube.com/embed/abC0RZUy8xc"
        },
        {
          id: 6,
          name: "The Swing Crew",
          src: "https://www.youtube.com/embed/xvgjF3WjdU4"
        },
        {
          id: 7,
          name: "Carpe Diem String Quartet",
          src: "https://www.youtube.com/embed/zyv-18J8IWo"
        },
        {
          id: 8,
          name: "Michelle Orman",
          src: "https://www.youtube.com/embed/uS6D_9FNXps"
        },
        {
          id: 9,
          name: "Stephen Dombrowski",
          src: "https://www.youtube.com/embed/iUXXYV3hsLY"
        },
        {
          id: 10,
          name: "Jeremy Chapman",
          src: "https://www.youtube.com/embed/saIoMjZzcGE"
        },
        {
          id: 11,
          name: "Alfazz - Sharif Khlief",
          src: "https://www.youtube.com/embed/DyiFk7azrhg"
        },
        {
          id: 12,
          name: "Ben Redwine",
          src: "https://www.youtube.com/embed/nIMdQdCLY0c"
        }
      ]
    }

  render () {
    let videosCards = this.state.videos.map(videos => {
      return (
        <Col lg="6" style={{ padding: '5px' }} key={videos.id}>
          <VideosCard videos={videos} />
        </Col>
      )
    })
    return (
      <div className="bg-color">
      <Container>
        <h1 className='section-headline text-center py-3'>Videos</h1>
        <Row noGutters>
          {videosCards}
        </Row>
      </Container>
      </div>
    )
  }
}

export default VideosCardGroup;
