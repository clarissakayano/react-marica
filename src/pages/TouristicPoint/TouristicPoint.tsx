import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { it } from 'node:test'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'
import { FiPhone } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { RiMapPinLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'

import { usePoints } from 'context/PontosContext'

import ItemCard from 'components/Cards/ItemCard'
import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { CategoriesColor, Title } from './styles'

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

  return (
    <>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <h2>Não foi possível carregar...</h2>}
      {!isLoading && !error && point && (
        <>
          <Carousel className="mb-4">
            {!isLoading &&
              !error &&
              Array.isArray(point?.images) &&
              point?.images.map((image) => (
                <Carousel.Item className="h-100" key={image.id}>
                  <img src={image.src} alt="imagem" />
                </Carousel.Item>
              ))}
          </Carousel>

          <Container>
            <Row className="mb-4">
              <Col className="col-12 col-lg-8">
                <a href="/pontos">
                  <h2>{point.nome}</h2>
                </a>
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
              </Col>
            </Row>

            <div />
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
            {Array.isArray(point.viajantes) && (
              <div className="mt-4">
                <Title>Tipos de Viajantes</Title>

                <Row className="row-cols-3">
                  {point.viajantes.map((p) => (
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
            {Array.isArray(point.estruturas) && (
              <div className="mt-4">
                <Title>Estruturas</Title>

                <Row className="row-cols-2 row-cols-md-3">
                  {point.estruturas.map((p) => (
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
      <Footer />
    </>
  )
}
export default memo(TouristicPoint)
