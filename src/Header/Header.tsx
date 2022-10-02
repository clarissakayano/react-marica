import { memo } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { AiFillYoutube } from 'react-icons/ai'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaBars, FaInstagram } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'

import logo from 'assets/logo.png'
import logo2 from 'assets/maricas.png'

import Banners from 'components/BannersHome'

import { Container } from 'pages/Home/styles'

import { BgColor, Buttom } from './styles'

const Header: React.FC = () => (
  <div>
    <BgColor>
      <Container className="d-flex justify-content-between h-100 container">
        <div className="d-flex align-items-center">
          <FaBars style={{ color: 'white' }} />
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid d-none d-md-inline"
            src={logo}
            alt="conheça marica"
          />
          <img className="img-fluid d-md-none " src={logo2} alt="marica" />
        </div>
        <div className="d-flex h-100 mt-3">
          <div className="d-none d-md-flex align-items-center justify-content-end">
            <div className="me-2">
              <BsTwitter color="white" />
            </div>
            <div className="me-2">
              <BsYoutube color="white" />
            </div>
            <div className="me-2">
              <FaInstagram color="white" />
            </div>
            <div className="me-2">
              <AiFillYoutube color="white" />
            </div>
          </div>
        </div>
      </Container>
    </BgColor>

    <main />
  </div>
)
export default memo(Header)
