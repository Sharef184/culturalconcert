import React from 'react';
import { Container, Table, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Contacts = () => {
  return (

      <Container className= "py-5">
        <h1 className='section-headline text-center'>Contacts</h1>
        <Table striped bordered hover id="contacts-table" className='text-center bg-color'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Linda Shea</td>
              <td>Director</td>
              <td className="text-break">lindasuzanneshea@gmail.com</td>
            </tr>
            <tr>
              <td>Elena Nezhdanova</td>
              <td>Artistic Director</td>
              <td className="text-break">elena_nezh@yahoo.com</td>
            </tr>
            <tr>
              <td>Roman Placzek</td>
              <td>Artistic Director</td>
              <td className="text-break">Romplacek@msn.com</td>
            </tr>
          </tbody>
        </Table>
        <Jumbotron className='bg-color py-5'>
          <h1 className='section-headline section-b-color'>We'd love to hear from you!</h1>
          <h2 className='section-headline section-a-color'>Find us on our social media channels.</h2>
          <a className='social-media' target="_blank" rel="noopener noreferrer" href="https://twitter.com/praguemusic">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className='social-media' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCKpSze1NAq5e9wT_AUGy6ZA">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className='social-media' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/culturalconcerts/?epa=SEARCH_BOX">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <h3 className='section-headline section-b-color'>Follow, Like, Comment!</h3>
        </Jumbotron>
      </Container>
  )
}

export default Contacts;
