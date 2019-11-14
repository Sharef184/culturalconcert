import React from 'react'
import { Card } from 'react-bootstrap'

class VideosCard extends React.Component {
  render () {
    let { name, src } = this.props.videos;
    return (
        <Card style={{ width: '100%', height: '250px'}}>
          <Card.Body>
            <Card.Title className='text-center'>{name}</Card.Title>
            <iframe style={{ width: '100%', height: '90%'}} src={src} title={name} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
          </Card.Body>
        </Card>
    )
  }
}

export default VideosCard;
