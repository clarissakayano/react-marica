import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'
import { Link } from 'react-router-dom'

import maricaprotege from 'assets/marica-protege.png'
import marica from 'assets/maricafooter.png'

import { BgF, Footer1, TextWhite } from './styles'

const Footer: React.FC = () => {
  return (
    <Footer1>
      <BgF className="d-flex py-5 py-md-3">
        <Container>
          <Row className="row-cols-1 row-cols-lg-1 row-cols-xl-2">
            <Col className=" ">
              <div className="d-flex justify-content-xl-start justify-content-center mb-2">
                <a
                  href="https://www.facebook.com/conhecamaricaoficial"
                  target="blank"
                >
                  <div>
                    <MdFacebook className="me-1" color="white" size={20} />
                    <span className="d-none d-md-inline">Facebook</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/conhecamaricarj/"
                  target="blank"
                >
                  <div>
                    <FaInstagram
                      className="me-1 mx-3"
                      color="white"
                      size={20}
                    />
                    <span className="d-none d-md-inline mr-3 me-1">
                      Instagram
                    </span>
                  </div>
                </a>

                <a href="https://twitter.com" target="blank">
                  <div>
                    <BsTwitter className="me-1 mx-3" color="white" size={20} />
                    <span className="d-none d-md-inline mr-3 me-1">
                      Twitter
                    </span>
                  </div>
                </a>

                <a href="https://www.youtube.com/" target="blank">
                  <div>
                    <BsYoutube className="me-1 mx-3" color="white" />
                    <span className="d-none d-md-inline mr-3 me-1">
                      Youtube
                    </span>
                  </div>
                </a>
              </div>
              <div className="d-flex justify-content-xl-start justify-content-center mb-2">
                <Link to="https://app.marica2030.com.br/login" target="blank">
                  <TextWhite className="justify-content-center">
                    Área do comerciante
                  </TextWhite>
                </Link>
              </div>
            </Col>
            <Col>
              <div className="d-flex  flex-md-row justify-content-center align-items-center flex-column mb-2 ">
                <img src={maricaprotege} alt="marica protege" height="60" />

                <div className="mx-4">
                  <a
                    className="mb-1"
                    href="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TextWhite>Manual Gastronomia</TextWhite>
                  </a>

                  <Link
                    to="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf"
                    target="_blank"
                  >
                    <TextWhite>Manual Hospedagem</TextWhite>
                  </Link>
                </div>
                <img src={marica} className="img-fluid" alt="marica turismo" />
              </div>
            </Col>
          </Row>
        </Container>
      </BgF>
    </Footer1>
  )
}

export default memo(Footer)
