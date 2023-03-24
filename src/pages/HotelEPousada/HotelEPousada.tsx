import { memo, useEffect } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineGlobal, AiOutlineMail } from 'react-icons/ai'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { HiArrowLeft } from 'react-icons/hi'
import { RiMapPinLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useHotels } from 'context/HotelEPousadaContext'

import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { CategoriesColor, Img, Title } from './styles'

const HotelEPousada: React.FC = () => {
  const { fetchHotel, hotel, isLoading, error } = useHotels()
  const { t, i18n } = useTranslation()

  const { id } = useParams()

  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchHotel(id)
  }, [fetchHotel, id])

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
      {isLoading && <p>Loading...</p>}
      {error && <h2>Não foi possível carregar...</h2>}
      {!isLoading && !error && hotel && (
        <>
          {hotel?.images.length >= 4 && (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Slider {...settings}>
              {hotel?.images.map((banner) => (
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
                  <a href="/hoteis-e-pousadas">
                    <Title className="mt-5">
                      <HiArrowLeft color="black" size={22} className="me-2 " />
                      {hotel?.nome}
                    </Title>
                  </a>
                </div>

                <div className="d-flex flex-wrap mt-3">
                  {!isLoading &&
                    !error &&
                    Array.isArray(hotel?.categorias) &&
                    hotel.categorias.map((category) => (
                      <div key={category.id}>
                        <CategoriesColor className="me-3">
                          {category.label}
                        </CategoriesColor>
                      </div>
                    ))}
                </div>
              </Col>
            </Row>

            <div />
            <div>
              <p>{hotel.descricao_t}</p>
            </div>
            {Array.isArray(hotel.addresses) && (
              <div>
                <Title>Sobre</Title>
                <div>
                  {hotel.addresses.map((p) => (
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
            {hotel.phones.map((p) => (
              <p key={p.id}>
                <FiPhone className="me-2" size={20} color="#6ebd00" />
                {p.nome} : {p.number}
              </p>
            ))}

            <div>
              <p>
                <AiOutlineMail className="me-2" size={20} color="#6ebd00" />
                <span>{hotel?.email}</span>
              </p>
            </div>
            <div>
              <p>
                <AiOutlineGlobal className="me-2" size={20} color="#6ebd00" />
                <span>{hotel?.site}</span>
              </p>
            </div>

            {Array.isArray(hotel?.dicas_t) && (
              <div className="mt-4">
                <Title>Dicas</Title>

                <p>{hotel.dicas_t}</p>
              </div>
            )}

            {Array.isArray(hotel.estruturas) && hotel.restricoes.length > 0 && (
              <div className="mt-4">
                <Title>Estruturas</Title>

                <Row className="row-cols-2 row-cols-md-3">
                  {hotel.estruturas.map((p) => (
                    <Col className="d-flex align items-center" key={p.label}>
                      <p>
                        <SVG className="me-2" src={p.icone} fill="#6ebd00" />
                        {p.label}
                      </p>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {Array.isArray(hotel.restricoes) && hotel.restricoes.length > 0 && (
              <div className="mt-4">
                <Title>Restrições</Title>

                <Row className="row-cols-3">
                  {hotel.restricoes.map((p) => (
                    <Col className="d-flex align items-center" key={p.label}>
                      <p className="mb-3">
                        <SVG className="me-2" src={p.icone} fill="#6ebd00" />
                        {p.label}
                      </p>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {Array.isArray(hotel.formas_pagamento) &&
              hotel.formas_pagamento.length > 0 && (
                <div className="mt-4">
                  <Title>Formas de Pagamento</Title>

                  <Row className="row-cols-3">
                    {hotel?.formas_pagamento.map((p) => (
                      <Col className="d-flex align items-center" key={p.label}>
                        <div>
                          <FaRegCheckCircle className="me-2" fill="#6ebd00" />{' '}
                        </div>
                        <p className="mb-3">{p.label}</p>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
          </Container>
        </>
      )}
      <Footer />
    </>
  )
}
export default memo(HotelEPousada)
