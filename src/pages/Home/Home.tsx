import { memo, useEffect } from 'react'

import Header from 'Header/Header'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaRoute, FaUmbrellaBeach } from 'react-icons/fa'
import { GiMicrophone } from 'react-icons/gi'
import { IoMdFlower } from 'react-icons/io'
import { MdLocationCity } from 'react-icons/md'
import {
  RiHotelBedFill,
  RiRestaurantFill,
  RiCalendar2Fill,
} from 'react-icons/ri'
import { SiHomeassistantcommunitystore } from 'react-icons/si'

import appstore from 'assets/appstore.png'
import googleapp from 'assets/googleapp.png'
import phone from 'assets/phone.png'

import BannersH from 'components/BannersH'
import HomeCards from 'components/Cards/HomeCards'
import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { BgColorFooter, SubTitle, TextFooter, BgColor, Btn } from './styles'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <BannersH />

      <BgColor className="d-flex">
        <Container className="py-5">
          <Row className="d-flex col justify-content-center">
            <Col className="col-6 col-md-4 mb-2">
              <Card className=" d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <FaUmbrellaBeach size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Pontos Turísticos"
                    description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
                  />
                </div>
                <a
                  href="/pontos"
                  style={{ textDecoration: 'none' }}
                  className="d-flex justify-content-center mb-3"
                >
                  <Btn>Acessar</Btn>
                </a>
              </Card>
            </Col>

            <Col className="col-6 col-md-4 mb-2">
              <Card className="d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <RiHotelBedFill size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Hotéis e Pousadas"
                    description="Saiba onde se hospedar em Maricá"
                  />
                </div>
                <a
                  href="/hoteis-e-pousadas"
                  style={{ textDecoration: 'none' }}
                  className="d-flex justify-content-center mb-3"
                >
                  <Btn>Acessar</Btn>
                </a>
              </Card>
            </Col>

            <Col className="col-6 col-md-4 mb-2">
              <Card className="d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <RiRestaurantFill size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Bares e Restaurantes"
                    description="Saiba onde se hospedar em Maricá"
                  />
                </div>
                <a
                  href="/bares-e-restaurantes"
                  style={{ textDecoration: 'none' }}
                  className="d-flex justify-content-center mb-3"
                >
                  <Btn>Acessar</Btn>
                </a>
              </Card>
            </Col>

            <Col className="col-6 col-md-4 mb-2">
              <Card className="d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <SiHomeassistantcommunitystore size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Comércio Local"
                    description="Veja onde fazer as suas compras"
                  />
                </div>
                <a
                  href="/comercio-local"
                  style={{ textDecoration: 'none' }}
                  className="d-flex justify-content-center mb-3"
                >
                  <Btn>Acessar</Btn>
                </a>
              </Card>
            </Col>

            <Col className="col-6 col-md-4 mb-2">
              <Card className="d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <GiMicrophone size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Espaços para Eventos"
                    description="Locais para fazer suas festas ou reuniões"
                  />
                </div>
                <a
                  href="/espacos"
                  style={{ textDecoration: 'none' }}
                  className="d-flex justify-content-center mb-3"
                >
                  <Btn>Acessar</Btn>
                </a>
              </Card>
            </Col>

            <Col className="col-6 col-md-4 mb-2">
              <Card className="d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <RiCalendar2Fill size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Eventos"
                    description="Confira o calendário de eventos da cidade"
                  />
                </div>
                <a
                  href="/eventos"
                  style={{ textDecoration: 'none' }}
                  className="d-flex justify-content-center mb-3"
                >
                  <Btn>Acessar</Btn>
                </a>
              </Card>
            </Col>

            <Col className="col-6 col-md-4 mb-2">
              <Card className="d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <FaRoute size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Roteiros turísticos"
                    description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade."
                  />
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <Btn>Acessar</Btn>
                </div>
              </Card>
            </Col>

            <Col className="col-6 col-md-4 mb-2">
              <Card className="d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <IoMdFlower size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Artesanato"
                    description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                  />
                </div>
                <a
                  href="https://www.feirartemarica.com.br/"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  className="d-flex justify-content-center mb-3"
                  rel="noreferrer"
                >
                  <Btn>Acessar</Btn>
                </a>
              </Card>
            </Col>

            <Col className="col-6 col-md-4 mb-2">
              <Card className="d-flex flex-column align-items-center text-center py-3 px-2 rounded h-100 border-0">
                <div className="d-flex justify-content-center py-2">
                  <MdLocationCity size={48} />
                </div>
                <div className="d-flex justify-content-center">
                  <HomeCards
                    title="Sobre a cidade"
                    description="Conheça mais sobre Maricá"
                  />
                </div>
                <a
                  href="/sobreacidade"
                  style={{ textDecoration: 'none' }}
                  className="d-flex justify-content-center mb-3"
                >
                  <Btn>Acessar</Btn>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </BgColor>

      <BgColorFooter>
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
                    <img
                      className="img-fluid"
                      src={googleapp}
                      alt="googleapp"
                    />
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
      <Footer />
    </>
  )
}

export default memo(Home)
