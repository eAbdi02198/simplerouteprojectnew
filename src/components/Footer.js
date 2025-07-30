import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='footer'>
      <Container fluid className='p-5'>
        <Row className='align-items-center'>
          <Col md={6} className='text-center text-md-start mb-4 mb-md-0'>
            <h3 className='footer-title'>برنامه نویسی به سبک نکست وان کد</h3>
            <p className='footer-text'>
              یادگیری برنامه‌نویسی با مثال‌های کاربردی و پروژه محور.  
              همیشه با ما به‌روز باشید!  
            </p>
            <div className='social-icons'>
              <a href='#'><FaInstagram /></a>
              <a href='#'><FaTelegramPlane /></a>
              <a href='#'><FaYoutube /></a>
            </div>
          </Col>
          <Col md={6} className='text-center'>
            <img src="/images/1.png" alt="logo" className='footer-img'/>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mt-4'>
            <p className='copyright'>
              © {new Date().getFullYear()} NextOneCode | تمامی حقوق محفوظ است
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}