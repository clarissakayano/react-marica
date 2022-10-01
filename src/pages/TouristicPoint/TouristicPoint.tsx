import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'
import { FiPhone } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { RiMapPinLine } from 'react-icons/ri'
import { useParams } from 'react-router-dom'

import { usePoints } from 'context/PontosContext'

import ItemCard from 'components/Cards/ItemCard'
import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

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
          <Carousel>
            {!isLoading &&
              !error &&
              Array.isArray(point?.images) &&
              point?.images.map((image) => (
                <Carousel.Item key={image.id}>
                  <img src={image.src} alt="imagem" />
                </Carousel.Item>
              ))}
          </Carousel>

          <Container>
            <h2>{point.nome}</h2>
            <div>
              {!isLoading &&
                !error &&
                Array.isArray(point?.categorias) &&
                point.categorias.map((category) => (
                  <div key={category.id}>
                    <p>{category.label}</p>
                  </div>
                ))}
            </div>
            <div>
              <p>{point.descricao_t}</p>
            </div>
            {Array.isArray(point.addresses) && (
              <div>
                <h2>Sobre</h2>
                <div>
                  {point.addresses.map((p) => (
                    <p key={p.id}>
                      <RiMapPinLine size={20} color="#6ebd00" />
                      {p.label}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {point.phones.map((p) => (
              <p key={p.id}>
                <FiPhone size={20} color="#6ebd00" />
                {p.nome} : {p.number}
              </p>
            ))}
            {Array.isArray(point.dicas_t) && (
              <div className="mt-4">
                <h2>Dicas</h2>
                <div>
                  <p>{point.dicas_t}</p>
                </div>
              </div>
            )}
            {Array.isArray(point.viajantes) && (
              <div className="mt-4">
                <h2>Tipos de Viajantes</h2>

                <Row className="row-cols-3">
                  {point.viajantes.map((p) => (
                    <Col className="d-flex align items-center">
                      <p>
                        <IoIosCheckmarkCircleOutline
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
                <h2>Estruturas</h2>

                <Row className="row-cols-3">
                  {point.estruturas.map((p) => (
                    <Col className="d-flex align items-center">
                      <p>
                        <IoIosCheckmarkCircleOutline
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
          </Container>
        </>
      )}
      <Footer />
    </>
  )
}
export default memo(TouristicPoint)
