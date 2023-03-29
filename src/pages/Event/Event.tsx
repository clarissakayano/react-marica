import { memo, useEffect } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BsCheckCircle } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import SVG from 'react-inlinesvg'
import { useParams } from 'react-router-dom'

import AppleStore from 'assets/appstore.png'
import GooglePlay from 'assets/googleapp.png'

import { useEvents } from 'context/EventContext '

import CategoriesPillsComponents from 'components/CategoriesPillsComponents'
import Footer from 'components/Footer/Footer'
import TitlePage from 'components/TitlePage'

import useTitle from 'hooks/useTitle'

import {
  BgPage,
  CategoryStyled,
  IconStyle,
  Img,
  ImgApp,
  SubTitle,
  Title,
} from './style'

const Event: React.FC = () => {
  const setTitle = useTitle()
  const { event, isLoading, error, fetchEvent, categories } = useEvents()
  const { id } = useParams()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (event?.nome) setTitle(t(`${event?.nome} | Eventos`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, event?.nome])

  useEffect(() => {
    if (id) fetchEvent(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      <BgPage className="flex-grow-1">
        {isLoading && <p>Loading...</p>}
        {error && <h2>Falha de carregamento</h2>}
        {!isLoading && !error && event && (
          <>
            {event?.images.length < 4 && (
              <div className="d-flex justify-content-between">
                {event?.images.map((banner) => (
                  <Img
                    key={banner.id}
                    capa={banner.src}
                    className="d-block w-100"
                  />
                ))}
              </div>
            )}

            <Container>
              <Row className="mb-5 mt-3">
                <Col className="col-12 col-lg-8">
                  <SubTitle>Eventos</SubTitle>
                  <TitlePage title={event.nome} to="/eventos" />
                  <div className="d-flex flex-wrap mb-4 mt-2">
                    {isLoading && <p>Loading...</p>}
                    {!isLoading && !error && (
                      <CategoriesPillsComponents
                        loading={isLoading}
                        error={error}
                        categories={categories}
                      />
                    )}
                  </div>

                  <div className="mt-3">
                    <p className="fs-5">{event.descricao_t}</p>
                  </div>
                  {Array.isArray(event.addresses) && (
                    <div className="mt-5">
                      <h2>Sobre</h2>
                      <div className="border-bottom border-secondary mb-3" />
                      {event.addresses.map((i) => (
                        <p
                          key={i.id}
                          className="fs-5 d-flex align-items-center mt-2"
                        >
                          <IconStyle className="me-3">
                            <HiOutlineLocationMarker size={30} />
                          </IconStyle>
                          {i.label}
                        </p>
                      ))}

                      {event?.gratuito && (
                        <div className="mb-4 mb-md-5">
                          <Title>Valor da Entrada</Title>
                          <div className="border-bottom border-secondary mb-3" />
                          <div className="d-flex align-items-center fs-md mb-3">
                            <FaRegMoneyBillAlt
                              className="me-2"
                              size={20}
                              color="#6ebd00"
                            />

                            <div className="pt-1">
                              {event.gratuito === 1 ? 'Gratuita' : ''}
                            </div>
                          </div>
                        </div>
                      )}

                      {event.phones.map((i) => (
                        <p
                          key={i.id}
                          className="fs-5 d-flex align-items-center mt-2"
                        >
                          <IconStyle className="me-3">
                            <HiOutlinePhone size={30} />
                          </IconStyle>
                          {i.nome}: {i.number}
                        </p>
                      ))}
                    </div>
                  )}
                  {Array.isArray(event.dicas_t) && (
                    <div className="mt-4">
                      <h2>Dicas</h2>
                      <div className="border-bottom border-secondary mb-3" />
                      <p>{event?.dicas_t}</p>
                    </div>
                  )}
                  {Array.isArray(event.viajantes) && (
                    <div className="mt-4">
                      <h2>Tipos de Viajantes</h2>
                      <div className="border-bottom border-secondary mb-3" />
                      <Row className="row-cols-3">
                        {event.viajantes.map((i) => (
                          <Col
                            key={i.label}
                            className="d-flex align-items-center"
                          >
                            <p className="mb-3">
                              <IconStyle className="me-3">
                                <BsCheckCircle size={26} />
                              </IconStyle>
                              {i.label}
                            </p>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  )}
                  {Array.isArray(event.estruturas) &&
                    event.estruturas.length > 0 && (
                      <div className="mt-4">
                        <h2>Estruturas</h2>
                        <div className="border-bottom border-secondary mb-3" />
                        <Row className="row-cols-3">
                          {event.estruturas.map((i) => (
                            <Col
                              key={i.label}
                              className="d-flex align-items-center"
                            >
                              <SVG
                                src={`${i.icone}/menu.svg`}
                                width={22}
                                title="Menu"
                                className="me-3"
                                fill="#6ebd00"
                              />
                              <p className="mb-3">{i.label}</p>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    )}
                  {Array.isArray(event.restricoes) &&
                    event.restricoes.length > 0 && (
                      <div className="mt-4">
                        <h2>Restricoes</h2>
                        <div className="border-bottom border-secondary mb-3" />
                        <Row className="row-cols-3">
                          {event.restricoes.map((i) => (
                            <Col
                              key={i.label}
                              className="d-flex align-items-center"
                            >
                              <SVG
                                src={`${i.icone}/menu.svg`}
                                width={22}
                                title="Menu"
                                className="me-3"
                                fill="#6ebd00"
                              />
                              <p className="mb-3">{i.label}</p>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    )}
                </Col>
                <Col className="col-12 col-lg-4">
                  <h2 className="fs-3 fw-bold mt-3">Conheca nosso app</h2>
                  <div className="d-flex mt-3">
                    <ImgApp
                      className="img-fluid me-3"
                      src={GooglePlay}
                      alt="Google Play"
                    />
                    <ImgApp
                      className="img-fluid"
                      src={AppleStore}
                      alt="Apple Store"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </BgPage>
      <Footer />
    </>
  )
}

export default memo(Event)
