import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'
import { FiPhone } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { RiMapPinLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { useParams } from 'react-router-dom'

import { useHotels } from 'context/HotelEPousadaContext'

import ItemCard from 'components/Cards/ItemCard'
import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { CategoriesColor, Title } from './styles'

const HotelEPousada: React.FC = () => {
  const { fetchHotel, hotel, isLoading, error } = useHotels()

  const { id } = useParams()
  console.log('idP')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchHotel(id)
  }, [fetchHotel, id])

  useEffect(() => {
    setTitle('Pontos-Turisticos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <h2>Não foi possível carregar...</h2>}
      {!isLoading && !error && hotel && (
        <>
          <Carousel className="mb-4">
            {!isLoading &&
              !error &&
              Array.isArray(hotel?.images) &&
              hotel?.images.map((image) => (
                <Carousel.Item className="h-100" key={image.id}>
                  <img src={image.src} alt="imagem" />
                </Carousel.Item>
              ))}
          </Carousel>

          <Container>
            <Row className="mb-4">
              <Col className="col-12 col-lg-8">
                <h2>{hotel.nome}</h2>
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
            {Array.isArray(hotel.dicas_t) && (
              <div className="mt-4">
                <Title>Dicas</Title>

                <p>{hotel.dicas_t}</p>
              </div>
            )}
            {Array.isArray(hotel.viajantes) && (
              <div className="mt-4">
                <Title>Tipos de Viajantes</Title>

                <Row className="row-cols-3">
                  {hotel.viajantes.map((p) => (
                    <Col className="d-flex align items-center">
                      <p>
                        <IoIosCheckmarkCircleOutline
                          className="me-2"
                          size={25}
                          color="#6ebd00"
                        />
                        {p.label}
                      </p>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {Array.isArray(hotel.estruturas) && (
              <div className="mt-4">
                <Title>Estruturas</Title>

                <Row className="row-cols-2 row-cols-md-3">
                  {hotel.estruturas.map((p) => (
                    <Col className="d-flex align items-center">
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
      <Footer />
    </>
  )
}
export default memo(HotelEPousada)
