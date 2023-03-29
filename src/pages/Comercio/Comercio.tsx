import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'
import { AiOutlineClockCircle, AiOutlineMail } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import { HiArrowLeft } from 'react-icons/hi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { RiMapPinLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useCommerces } from 'context/CommerceContext'

import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { CategoriesColor, Title, TextBlack, Img, Subtitle } from './styles'

const Commerce: React.FC = () => {
  const { fetchCommerce, commerce, isLoading, error } = useCommerces()

  const { id } = useParams()
  console.log('idP')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchCommerce(id)
  }, [fetchCommerce, id])

  useEffect(() => {
    setTitle('Comércio')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        {isLoading && <p>Loading...</p>}
        {error && <h2>Não foi possível carregar...</h2>}
        {!isLoading && !error && commerce && (
          <>
            {commerce?.images.length >= 4 && (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Slider {...settings}>
                {commerce?.images.map((banner) => (
                  <Img
                    key={banner.id}
                    capa={banner.src}
                    className="d-block w-100"
                  />
                ))}
              </Slider>
            )}

            <Container className="mb-5">
              <Row className="mb-4 mt-3">
                <Col className="col-12 col-lg-8">
                  <Subtitle className="fs-sm fw-light mx-4 mt-3">
                    Comércio Local
                  </Subtitle>

                  <a href="/comercio-local">
                    <Title className="fw-bold">
                      <HiArrowLeft color="black" size={22} className="me-2 " />
                      {commerce?.nome}
                    </Title>
                  </a>
                  <div className="d-flex flex-wrap mt-3">
                    {!isLoading &&
                      !error &&
                      Array.isArray(commerce?.categorias) &&
                      commerce.categorias.map((category) => (
                        <div key={category.id}>
                          <CategoriesColor className="me-3 mt-2">
                            {category.label}
                          </CategoriesColor>
                        </div>
                      ))}
                  </div>
                </Col>
              </Row>

              <div>
                <p>{commerce.descricao_t}</p>
              </div>
              {Array.isArray(commerce.addresses) && (
                <div>
                  <Title>Sobre</Title>
                  <div>
                    {commerce.addresses.map((p) => (
                      <p key={p.id}>
                        <RiMapPinLine
                          className="me-2"
                          size={20}
                          color="#6ebd00"
                        />
                        {p.label}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {commerce.phones.map((p) => (
                <p key={p.id}>
                  <FiPhone className="me-2" size={20} color="#6ebd00" />
                  {p.nome} : {p.number}
                </p>
              ))}
              <div className="mt2">
                <AiOutlineMail className="me-2" size={20} color="#6ebd00" />
                <span>{commerce.email}</span>
              </div>

              {commerce.redes.map((p) => (
                <p>
                  <FiPhone className="me-2" size={20} color="#6ebd00" />
                  {p.nome} : {p.user}
                </p>
              ))}

              {commerce.horario_funcionamento.length > 0 && (
                <div className="d-flex mt-3 ">
                  <div>
                    <AiOutlineClockCircle
                      size={20}
                      color="#6ebd00"
                      className="me-2"
                    />
                  </div>
                  <Col className="col-3">
                    {commerce.horario_funcionamento.map((horario) => (
                      <p className="fw-bold">{horario.label}</p>
                    ))}
                  </Col>
                  <Col className="col-5">
                    {commerce.horario_funcionamento.map((horario) => (
                      <p>
                        {horario.horario.abre} às {horario.horario.fecha}
                      </p>
                    ))}
                  </Col>
                </div>
              )}

              {Array.isArray(commerce.estruturas) && (
                <div className="mt-4">
                  <Title>Estruturas</Title>

                  <Row className="row-cols-1 row-cols-md-2">
                    {commerce.estruturas.map((p) => (
                      <Col className="d-flex align items-center">
                        <p>
                          <SVG
                            className="me-2"
                            src={p.icone}
                            fill="#6ebd00"
                            width={20}
                          />
                          {p.label}
                        </p>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}

              {Array.isArray(commerce?.restricoes) &&
                commerce?.restricoes.length > 0 && (
                  <div className="mt-4">
                    <Title>Restrições</Title>

                    <Row className="row-cols-3">
                      {commerce.restricoes.map((p) => (
                        <Col className="d-flex align items-center">
                          <p className="mb-3">
                            <SVG
                              className="me-2"
                              src={p.icone}
                              fill="#6ebd00"
                            />
                            {p.label}
                          </p>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}

              {Array.isArray(commerce.formas_pagamento) && (
                <div className="mt-4">
                  <Title>Formas de Pagamento</Title>

                  <Row className="row-cols-2 row-cols-md-3">
                    {commerce.formas_pagamento.map((p) => (
                      <Col className="d-flex align items-center">
                        <p>
                          <SVG
                            className="me-2"
                            src={p.icone}
                            fill="#6ebd00"
                            width={20}
                          />
                          {p.label}
                        </p>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </Container>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
export default memo(Commerce)
