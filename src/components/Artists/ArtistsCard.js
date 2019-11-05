import React from 'react'
import { Card } from 'react-bootstrap'

class ArtistsCard extends React.Component {
  render () {
    let { img, name, description } = this.props.artists;
    return (
        <Card style={{ width: '95%', height: '95%' }}>
          <Card.Img variant="top" src={img} alt={name} style={{ height: '50%' }}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
    )
  }
}

export default ArtistsCard;
