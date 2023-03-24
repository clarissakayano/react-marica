import { memo, useState } from 'react'

import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiFacebookCircleFill } from 'react-icons/ri'

import logo from 'assets/logo.png'
import logo2 from 'assets/maricas.png'

import Menu from 'components/Menu/Menu'
import { MenuOverlay } from 'components/Menu/styles'

import { Container } from 'pages/Home/styles'

import { BgColor } from './styles'

interface IHeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <div>
      <BgColor>
        <Container className="d-flex justify-content-between w-100 container">
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
            <span className="d-md-block d-none" id="Menu">
              Menu
            </span>
            <Menu
              menuIsVisible={menuIsVisible}
              setMenuIsVisible={setMenuIsVisible}
            />
          </div>
          <div className="d-flex justify-content-center d-none d-md-inline mt-3 mb-3">
            <img className="img-fluid " src={logo} alt="conheça marica" />
          </div>
          <div className="d-md-none mb-2 mt-2 ">
            <img
              className="img-fluid d-md-none mb-2 "
              src={logo2}
              alt="marica"
            />
          </div>
          <div className="d-flex h-100 mt-3">
            <div className="d-none d-md-flex align-items-center justify-content-end mt-3">
              <a
                href="https://www.facebook.com/conhecamaricaoficial"
                target="blank"
              >
                <div className="me-2">
                  <RiFacebookCircleFill color="white" size={19} />
                </div>
              </a>

              <a
                href="https://www.instagram.com/conhecamaricarj/"
                target="blank"
              >
                <div className="me-2">
                  <FaInstagram color="white" size={19} />
                </div>
              </a>

              <a href="https://twitter.com" target="blank">
                <div className="me-2">
                  <BsTwitter color="white" size={19} />
                </div>
              </a>

              <a href="https://www.youtube.com/" target="blank">
                <div className="me-2">
                  <BsYoutube color="white" size={19} />
                </div>
              </a>
            </div>
          </div>
        </Container>
      </BgColor>

      <main />
    </div>
  )
}
export default memo(Header)
