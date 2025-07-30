import React from 'react'
import './About.css'
import Mynavbar from '../components/Mynavbar'
import { Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Mynavbar />
      <Container>
        <Row>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error quo deleniti distinctio debitis voluptatum magnam, eius sit, alias accusantium quas dignissimos nisi excepturi beatae a ex id? Iusto, possimus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error quo deleniti distinctio debitis voluptatum magnam, eius sit, alias accusantium quas dignissimos nisi excepturi beatae a ex id? Iusto, possimus.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error quo deleniti distinctio debitis voluptatum magnam, eius sit, alias accusantium quas dignissimos nisi excepturi beatae a ex id? Iusto, possimus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error quo deleniti distinctio debitis voluptatum magnam, eius sit, alias accusantium quas dignissimos nisi excepturi beatae a ex id? Iusto, possimus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error quo deleniti distinctio debitis voluptatum magnam, eius sit, alias accusantium quas dignissimos nisi excepturi beatae a ex id? Iusto, possimus.</p>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
