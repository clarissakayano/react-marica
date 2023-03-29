import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'
import {
  AiOutlineArrowLeft,
  AiOutlineClockCircle,
  AiOutlineMail,
} from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { RiMapPinLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useRestaurants } from 'context/RestaurantesContext'

import CategoriesPillsComponents from 'components/CategoriesPillsComponents'
import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { CategoriesColor, Img, Title } from './styles'

const Restaurant: React.FC = () => {
  const { fetchRestaurant, restaurant, isLoading, error, categories } =
    useRestaurants()

  const { id } = useParams()
  console.log('idP')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchRestaurant(id)
  }, [fetchRestaurant, id])

  useEffect(() => {
    setTitle('Bares e Restaurantes')
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
      {!isLoading && !error && restaurant && (
        <>
          {restaurant?.images.length < 4 && (
            <div className="d-flex justify-content-between">
              {restaurant?.images.map((banner) => (
                <Img
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </div>
          )}
          {restaurant?.images.length >= 4 && (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Slider {...settings}>
              {restaurant?.images.map((banner) => (
                <Img
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </Slider>
          )}

          <Container>
            <Row className="mb-4 mt-3">
              <Col className="col-12 col-lg-8">
                <p className="fs-sm fw-light mx-4 mt-3">Bares e Restaurante</p>
                <a href="/bares-e-restaurantes">
                  <Title className="fw-bold">
                    {' '}
                    <AiOutlineArrowLeft
                      size="22"
                      height="22"
                      width="22"
                      color="black"
                      className="me-1"
                    />
                    {restaurant.nome}
                  </Title>
                </a>
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
              </Col>
            </Row>

            <div />
            <div>
              <p>{restaurant.descricao_t}</p>
            </div>
            {Array.isArray(restaurant.addresses) && (
              <div>
                <Title>Sobre</Title>
                <div>
                  {restaurant.addresses.map((p) => (
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
            {Array.isArray(restaurant.redes) && restaurant.redes.length > 0 && (
              <>
                {restaurant.redes.map((rede) => (
                  <div className="d-flex mt-3" key={rede.nome}>
                    <BsFacebook className="me-2" size={20} color="#6ebd00" />

                    <a
                      href={rede.url}
                      target="_blank"
                      className="d-flex text-start me-3 text-decoration-none"
                      rel="noreferrer"
                    >
                      {rede.user}
                    </a>
                  </div>
                ))}
              </>
            )}

            {restaurant.phones.map((p) => (
              <p key={p.id}>
                <FiPhone className="me-2" size={20} color="#6ebd00" />
                {p.nome} : {p.number}
              </p>
            ))}

            {restaurant.horario_funcionamento.length > 0 && (
              <div className="d-flex mt-3 ">
                <div>
                  <AiOutlineClockCircle
                    size={20}
                    color="#6ebd00"
                    className="me-2"
                  />
                </div>
                <Col className="col-3">
                  {restaurant.horario_funcionamento.map((horario) => (
                    <p className="fw-bold">{horario.label}</p>
                  ))}
                </Col>
                <Col className="col-6">
                  {restaurant.horario_funcionamento.map((horario) => (
                    <p>
                      {horario.horario.abre} às {horario.horario.fecha}
                    </p>
                  ))}
                </Col>
              </div>
            )}

            {Array.isArray(restaurant.dicas_t) && (
              <div className="mt-4">
                <Title>Dicas</Title>

                <p>{restaurant.dicas_t}</p>
              </div>
            )}

            {Array.isArray(restaurant.viajantes) && (
              <div className="mt-4">
                <Title>Tipos de Viajantes</Title>

                <Row className="row-cols-3">
                  {restaurant.viajantes.map((p) => (
                    <Col className="d-flex align items-center" key={p.label}>
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
            {Array.isArray(restaurant.estruturas) && (
              <div className="mt-4">
                <Title>Estruturas</Title>

                <Row className="row-cols-2 row-cols-md-3">
                  {restaurant.estruturas.map((p) => (
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
            {Array.isArray(restaurant.restricoes) &&
              restaurant.restricoes.length > 0 && (
                <div className="mt-4">
                  <Title>Restrições</Title>

                  <Row className="row-cols-3">
                    {restaurant.restricoes.map((p) => (
                      <Col className="d-flex align items-center" key={p.id}>
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
export default memo(Restaurant)
