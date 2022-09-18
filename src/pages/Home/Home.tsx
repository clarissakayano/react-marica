import { memo, useEffect } from 'react'

import Header from 'Header/Header'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaUmbrellaBeach } from 'react-icons/fa'

import Config from 'Config'

import HomeCards from 'components/Cards/HomeCards'
import Footer from 'components/Footer/Footer'
import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'

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
      <Container>
        <Row>
          <Col className="col-6 col-md-4 mb-2">
            <Card className="mt-5" style={{ width: '25rem' }}>
              <Card.Body>
                <div className="d-flex justify-content-center">
                  <FaUmbrellaBeach size={48} />
                </div>
                <Card.Title>Pontos Turísticos</Card.Title>

                <Card.Text>
                  Conheça nossas praias, lagoas, grutas e outros pontos
                  turísticos
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-6 col-md-4 mb-2">
            <Card className="mt-5" style={{ width: '25rem' }}>
              <div className="d-flex justify-content-center py-2">
                <FaUmbrellaBeach size={48} />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCards
                  title="Hotéis e Pousadas"
                  description="Saiba onde se hospedar em Maricá"
                />
              </div>
              <div className="d-flex justify-content-center">
                <buttom>Acessar</buttom>
              </div>
            </Card>
          </Col>
          <Col className="col-6 col-md-4 mb-2">
            <Card className="mt-5" style={{ width: '25rem' }}>
              <div className="d-flex justify-content-center py-2">
                <FaUmbrellaBeach size={48} />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCards
                  title="Hotéis e Pousadas"
                  description="Saiba onde se hospedar em Maricá"
                />
              </div>
              <div className="d-flex justify-content-center">
                <buttom>Acessar</buttom>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default memo(Home)
