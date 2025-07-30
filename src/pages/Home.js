import React, { useState } from 'react'
import './Home.css'
import Mynavbar from '../components/Mynavbar'
import { Col, Container, Row } from 'react-bootstrap'
import aks1 from '../images/undraw_forgot-password_nttj.png'
import Articleitem from '../components/Articleitem'
import infos from './infos'
import Footer from '../components/Footer'

export default function Home() {
    let [datas,setDatas]=useState(infos)

    
  return (
    <div>
      <Mynavbar />
      <Container className="home-container">
        <Row className="align-items-center mb-5">
          <Col md={6} className="home-text">
            <h1>برنامه نویسی نکست وان کد</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
            </p>
          </Col>
          <Col md={6} className="home-image">
            <img src={aks1} alt="forgot password" />
          </Col>
        </Row>
      </Container>

      {/* بخش کارت‌ها */}
      <Container>
        <Row className="g-4">
          {datas.map(data=>(
            <Col key={data.id} xs={12} sm={6} md={4} lg={3}>
              <Articleitem {...data} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}