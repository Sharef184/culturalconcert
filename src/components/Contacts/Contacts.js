import React from 'react';
import { Table } from 'react-bootstrap'

const Contacts = () => {
  return (
    <div className="bg-color contacts-section">
      <h1 className='section-headline text-center'>Contacts</h1>
      <Table striped bordered hover id="contacts-table" className='text-center'>
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
            <td>Paul Cronley</td>
            <td>Photographer</td>
            <td className="text-break">paul@merlinproductions.com</td>
          </tr>
          <tr>
            <td>Sharif Khlief</td>
            <td>Web Developer</td>
            <td className="text-break">sharifkhlief@gmail.com</td>
          </tr>
          <tr>
            <td>Linda Shea</td>
            <td>Director</td>
            <td className="text-break">lindasuzanneshea@gmail.com</td>
          </tr>
          <tr>
            <td>Paul Cronley</td>
            <td>Photographer</td>
            <td className="text-break">paul@merlinproductions.com</td>
          </tr>
          <tr>
            <td>Sharif Khlief</td>
            <td>Web Developer</td>
            <td className="text-break">sharifkhlief@gmail.com</td>
          </tr>
          <tr>
            <td>Linda Shea</td>
            <td>Director</td>
            <td className="text-break">lindasuzanneshea@gmail.com</td>
          </tr>
          <tr>
            <td>Paul Cronley</td>
            <td>Photographer</td>
            <td className="text-break">paul@merlinproductions.com</td>
          </tr>
          <tr>
            <td>Sharif Khlief</td>
            <td>Web Developer</td>
            <td className="text-break">sharifkhlief@gmail.com</td>
          </tr>
          <tr>
            <td>Linda Shea</td>
            <td>Director</td>
            <td className="text-break">lindasuzanneshea@gmail.com</td>
          </tr>
          <tr>
            <td>Paul Cronley</td>
            <td>Photographer</td>
            <td className="text-break">paul@merlinproductions.com</td>
          </tr>
          <tr>
            <td>Sharif Khlief</td>
            <td>Web Developer</td>
            <td className="text-break">sharifkhlief@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Contacts;
