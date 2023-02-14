import { memo, useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { AiFillYoutube } from 'react-icons/ai'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaBars, FaInstagram } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdFacebook } from 'react-icons/md'
import { RiFacebookCircleFill } from 'react-icons/ri'

import logo from 'assets/logo.png'
import logo2 from 'assets/maricas.png'

import Banners from 'components/BannersHome'
import Menu from 'components/Menu/Menu'
import { MenuOverlay } from 'components/Menu/styles'

import { Container } from 'pages/Home/styles'

import { BgColor, Buttom } from './styles'

interface IHeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <div>
      <BgColor>
        <Container className="d-flex justify-content-between h-100 container">
          <div className="d-flex align-items-center">
            <MenuOverlay
              menuIsVisible={menuIsVisible}
              onClick={() => setMenuIsVisible(false)}
            />
            <GiHamburgerMenu
              size={25}
              style={{ color: 'white' }}
              type="button"
              onClick={() => setMenuIsVisible(true)}
            />
            <span id="Menu">Menu</span>
            <Menu
              menuIsVisible={menuIsVisible}
              setMenuIsVisible={setMenuIsVisible}
            />
          </div>
          <div className="d-flex justify-content-center">
            <img
              className="img-fluid d-none d-md-inline mt-3 mb-3"
              src={logo}
              alt="conheça marica"
            />
            <img className="img-fluid d-md-none " src={logo2} alt="marica" />
          </div>
          <div className="d-flex h-100 mt-3">
            <div className="d-none d-md-flex align-items-center justify-content-end mt-3">
              <div className="me-2">
                <RiFacebookCircleFill color="white" size={19} />
              </div>

              <div className="me-2">
                <FaInstagram color="white" size={19} />
              </div>
              <div className="me-2">
                <AiFillYoutube color="white" size={19} />
              </div>
              <div className="me-2">
                <BsTwitter color="white" size={19} />
              </div>
              <div className="me-2">
                <BsYoutube color="white" size={19} />
              </div>
            </div>
          </div>
        </Container>
      </BgColor>

      <main />
    </div>
  )
}
export default memo(Header)
