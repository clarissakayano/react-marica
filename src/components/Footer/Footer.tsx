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

import { BgF, Footer1, TextWhite } from './styles'

const Footer: React.FC = () => {
  return (
    <Footer1>
      <BgF>
        <Container className="d-flex py-5 py-md-3">
          <Row className="">
            <Col className=" ">
              <div className="d-flex justify-content-left jutify-content-xl-start mb-2">
                <div>
                  <MdFacebook className="me-1" color="white" />
                  <span className="d-none d-md-inline">Facebook</span>
                </div>
                <div>
                  <FaInstagram className="me-1 mx-3" color="white" />
                  <span className="d-none d-md-inline mr-3 me-1">
                    Instagram
                  </span>
                </div>
                <div>
                  <BsTwitter className="me-1 mx-3" color="white" />
                  <span className="d-none d-md-inline mr-3 me-1">Twitter</span>
                </div>
                <div>
                  <BsYoutube className="me-1 mx-3" color="white" />
                  <span className="d-none d-md-inline mr-3 me-1">Youtube</span>
                </div>
              </div>
              <div className="mb-2">
                <div className=" text-xl-left">
                  <Link to="https://app.marica2030.com.br/login" target="blank">
                    <TextWhite>Área do comerciante</TextWhite>
                  </Link>
                </div>
              </div>
            </Col>
            <Col className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center mt-4 mt-xl-0">
              <div className="d-flex flex-column align-items-center flex-md-row col-lg-6 col-md-6">
                <div className="mb-3 mb-md-0">
                  <img src={maricaprotege} alt="marica protege" height="60" />
                </div>
                <div className="mx-md-4 mb-3 mb-md-0">
                  <div className="mb-1">
                    <a
                      className="mb-1"
                      href="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TextWhite>Manual Gastronomia</TextWhite>
                    </a>
                  </div>
                  <div>
                    <Link
                      to="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf"
                      target="_blank"
                    >
                      <TextWhite>Manual Hospedagem</TextWhite>
                    </Link>
                  </div>
                </div>
                <div className="mb-3 mb-md-0">
                  <img src={marica} alt="marica turismo" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </BgF>
    </Footer1>
  )
}

export default memo(Footer)
