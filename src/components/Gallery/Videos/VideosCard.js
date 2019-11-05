import React from 'react'
import { Card } from 'react-bootstrap'

class VideosCard extends React.Component {
  render () {
    let { img, name, description } = this.props.videos;
    return (
        <Card style={{ width: '90%', height: '90%', margin: '0 auto' }}>
          <Card.Img variant="top" src={img} alt={name} style={{ height: '50%' }}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
    )
  }
}

export default VideosCard;
