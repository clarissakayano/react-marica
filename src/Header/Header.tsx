import { memo } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaBars, FaInstagram } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'

import banner2 from 'assets/banner2.jpeg'
import calendar from 'assets/bannercalendario.jpeg'
import calendarsm from 'assets/calendarsm.jpeg'
import logo from 'assets/logo.png'
import logo2 from 'assets/maricas.png'
import sabor from 'assets/saborlg.jpeg'
import saborsm from 'assets/saborsm.jpeg'
import seminariosm from 'assets/seminariosm.jpeg'

import { Container } from 'pages/Home/styles'

import { BgColor, Buttom } from './styles'

const Header: React.FC = () => (
  <div>
    <BgColor>
      <Container className="d-flex justify-content-between h-100 container">
        <div className="d-flex align-items-center">
          <FaBars style={{ width: '15rem', color: 'white' }} />
        </div>
        <div>
          <img
            className="img-fluid d-none d-md-inline"
            src={logo}
            alt="conheça marica"
          />
          <img className="img-fluid d-md-none " src={logo2} alt="marica" />
        </div>
        <div className="d-flex h-100">
          <div className="d-none d-md-flex align-items-center justify-content-end">
            <BsTwitter color="white" />
            <BsYoutube color="white" />
            <FaInstagram color="white" />
          </div>
        </div>
      </Container>
    </BgColor>
    <main>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 d-none d-md-inline"
            src={calendar}
            alt="First slide"
          />
          <img
            className="d-md-none img-fluid"
            src={calendarsm}
            alt="calendar"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 d-none d-md-inline img-fluid"
            src={banner2}
            alt="Second slide"
          />
          <img
            className="d-md-none img-fluid"
            src={seminariosm}
            alt="seminario sm"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 d-none d-md-inline"
            src={sabor}
            alt="Sabor da Roça"
          />
          <img
            className="d-md-none img-fluid"
            src={saborsm}
            alt="sabor da roça"
          />
        </Carousel.Item>
      </Carousel>
    </main>
  </div>
)
export default memo(Header)
