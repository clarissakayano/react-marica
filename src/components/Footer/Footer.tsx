import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { Link } from 'react-router-dom'

import appstore from 'assets/appstore.png'
import googleapp from 'assets/googleapp.png'
import maricaprotege from 'assets/marica-protege.png'
import marica from 'assets/maricafooter.png'
import phone from 'assets/phone.png'

import styles from './Footer.css'
import { BgF, TextWhite } from './styles'

const Footer: React.FC = () => {
  return (
    <footer>
      <BgF>
        <Container>
          <Row>
            <Col className="d-flex flex-column col-xl-6 mb-4 mb-xl-0">
              <div className="d-flex mr-3 align-items-center justify-content-center justify-content-xl-start mb-2 g-2">
                <MdFacebook color="white" />
                <span className="d-none d-md-inline mr-3">Facebook</span>
                <FaInstagram color="white" />
                <span className="d-none d-md-inline mr-3">Instagram</span>
                <BsTwitter color="white" />
                <span className="d-none d-md-inline mr-3">Twitter</span>
                <BsYoutube color="white" />
                <span className="d-none d-md-inline mr-3">Youtube</span>
              </div>
              <div>
                <div className="d-flex justify-content-center">
                  <Link to="https://app.marica2030.com.br/login">
                    <TextWhite>Área do comerciante</TextWhite>
                  </Link>
                </div>
                <div className="d-flex flex-md-row col-xl-6 justify-content-center justify-content-xl-end text-center text-md-left">
                  <div className="mb-3 mb-md-0">
                    <img src={maricaprotege} alt="marica protege" />
                  </div>
                  <div className="mx-md-4 mb-3 mb-md-0">
                    <p className="mb-1">
                      <Link to="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf">
                        <TextWhite>Manual Gastronomia</TextWhite>
                      </Link>
                    </p>
                    <p>
                      <Link to="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf">
                        <TextWhite>Manual Gastronomia</TextWhite>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </BgF>
    </footer>
  )
}

export default memo(Footer)
