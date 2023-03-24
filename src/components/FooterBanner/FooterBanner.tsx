import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import appstore from 'assets/appstore.png'
import googleapp from 'assets/googleapp.png'
import phone from 'assets/phone.png'

import { BgColorFooter, BgWhite, SubTitle, TextFooter } from './styles'

const FooterBanner: React.FC = () => (
  <BgColorFooter className="py-5">
    <BgWhite className="d-none d-md-block" />
    <Container>
      <Row>
        <Col className="flex-column col-md-7 mb-4 mb-md-0">
          <TextFooter className="fw-bold mt-5 mb-4">
            Conheça nosso aplicativo
          </TextFooter>
          <SubTitle>
            Tenha o Guia Oficial de Turismo de Maricá a qualquer momento, na
            palma das suas mãos!
          </SubTitle>
          <Row className="mt-auto text-center text-md-left">
            <Col className="col-6 col-md-5 mb-3">
              <div>
                <img className="img-fluid" src={googleapp} alt="googleapp" />
              </div>
            </Col>
            <Col className="col-6 col-md-5 mb-3">
              <div>
                <img className="img-fluid" src={appstore} alt="appstore" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-6 col-md-5 text-md-right text-center mt-5">
          <img className="img-fluid mb-5" src={phone} alt="Phone" />
        </Col>
      </Row>
    </Container>
  </BgColorFooter>
)

export default memo(FooterBanner)
