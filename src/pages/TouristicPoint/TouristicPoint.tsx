/* eslint-disable react/jsx-props-no-spreading */
import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { HiArrowLeft } from 'react-icons/hi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { RiMapPinLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { usePoints } from 'context/PontosContext'

import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { CategoriesColor, Img, Title } from './styles'

const TouristicPoint: React.FC = () => {
  const { fetchPoint, point, isLoading, error } = usePoints()

  const { id } = useParams()
  console.log('idP')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchPoint(id)
  }, [fetchPoint, id])

  useEffect(() => {
    setTitle('Pontos-Turisticos')
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
        {!isLoading && !error && point && (
          <>
            {point?.images.length < 4 && (
              <div className="d-flex justify-content-between">
                {point?.images.map((banner) => (
                  <Img
                    key={banner.id}
                    capa={banner.src}
                    className="d-block w-100"
                  />
                ))}
              </div>
            )}
            {point?.images.length >= 4 && (
              <Slider {...settings}>
                {point?.images.map((banner) => (
                  <Img
                    key={banner.id}
                    capa={banner.src}
                    className="d-block w-100"
                  />
                ))}
              </Slider>
            )}

            <Container>
              <Row className="mb-4">
                <Col className="col-12 col-lg-8">
                  <div>
                    <div>
                      <a href="/pontos">
                        <Title className="mt-5">
                          <HiArrowLeft
                            color="black"
                            size={22}
                            className="me-2 "
                          />
                          {point?.nome}
                        </Title>
                      </a>
                    </div>
                    <div className="d-flex flex-wrap mt-3">
                      {!isLoading &&
                        !error &&
                        Array.isArray(point?.categorias) &&
                        point.categorias.map((category) => (
                          <div key={category.id}>
                            <CategoriesColor className="me-3">
                              {category.label}
                            </CategoriesColor>
                          </div>
                        ))}
                    </div>
                  </div>
                </Col>
              </Row>

              <div>
                <p>{point.descricao_t}</p>
              </div>
              {Array.isArray(point.addresses) && (
                <div>
                  <Title>Sobre</Title>
                  <div>
                    {point.addresses.map((p) => (
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
              {point?.dicas_t && (
                <div className="mb-4 mb-md-5">
                  <Title>Dicas</Title>
                  <div className="d-flex fs-md mb-3">
                    <p style={{ whiteSpace: 'pre-wrap' }}>{point.dicas_t}</p>
                  </div>
                </div>
              )}
              {point?.gratuito && (
                <div className="mb-4 mb-md-5">
                  <Title>Valor da Entrada</Title>
                  <div className="d-flex align-items-center fs-md mb-3">
                    <FaRegMoneyBillAlt
                      className="me-2"
                      size={20}
                      color="#6ebd00"
                    />

                    <div className="pt-1">
                      {point.gratuito === 1 ? 'Gratuita' : ''}
                    </div>
                  </div>
                </div>
              )}
              {point.phones.map((p) => (
                <p key={p.id}>
                  <FiPhone className="me-2" size={20} color="#6ebd00" />
                  {p.nome} : {p.number}
                </p>
              ))}
              {Array.isArray(point.dicas_t) && (
                <div className="mt-4">
                  <Title>Dicas</Title>

                  <p>{point.dicas_t}</p>
                </div>
              )}
              {point.viajantes?.length > 0 && (
                <div className="mt-4">
                  <Title>Tipos de Viajantes</Title>

                  <Row className="row-cols-3">
                    {point.viajantes.map((viajante) => (
                      <Col
                        className="d-flex align items-center"
                        key={viajante.label}
                      >
                        <p>
                          <IoIosCheckmarkCircleOutline
                            className="me-2"
                            size={25}
                            color="#6ebd00"
                          />
                          key={viajante.label}
                        </p>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}

              {Array.isArray(point.restricoes) && point.restricoes.length > 0 && (
                <div className="mt-4">
                  <Title>Restrições</Title>

                  <Row className="row-cols-3">
                    {point.restricoes.map((p) => (
                      <Col className="d-flex align items-center">
                        <p className="mb-3">
                          <SVG className="me-2" src={p.icone} fill="#6ebd00" />
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
export default memo(TouristicPoint)
