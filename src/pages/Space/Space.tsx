/* eslint-disable react/jsx-props-no-spreading */
import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { HiArrowLeft } from 'react-icons/hi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { RiMapPinLine } from 'react-icons/ri'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useSpaces } from 'context/SpaceContext'

import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { CategoriesColor, Img, Title } from './styles'

const Space: React.FC = () => {
  const { fetchSpace, space, isLoading, error } = useSpaces()

  const { id } = useParams()
  console.log('idP')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchSpace(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
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
        {!isLoading && !error && space && (
          <>
            {space?.images.length < 4 && (
              <div className="d-flex justify-content-between">
                {space?.images.map((banner) => (
                  <Img
                    key={banner.id}
                    capa={banner.src}
                    className="d-block w-100"
                  />
                ))}
              </div>
            )}
            {space?.images.length >= 4 && (
              <Slider {...settings}>
                {space?.images.map((banner) => (
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
                      <a href="/espacos">
                        <Title className="mt-5">
                          <HiArrowLeft
                            color="black"
                            size={22}
                            className="me-2 "
                          />
                          {space?.nome}
                        </Title>
                      </a>
                    </div>
                    <div className="d-flex flex-wrap mt-3">
                      {!isLoading &&
                        !error &&
                        Array.isArray(space?.categorias) &&
                        space.categorias.map((category) => (
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
                <p>{space.descricao_t}</p>
              </div>
              {Array.isArray(space.addresses) && (
                <div>
                  <Title>Sobre</Title>
                  <div>
                    {space.addresses.map((p) => (
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
              {space?.dicas_t && (
                <div className="mb-4 mb-md-5">
                  <Title>Dicas</Title>
                  <div className="d-flex fs-md mb-3">
                    <p style={{ whiteSpace: 'pre-wrap' }}>{space.dicas_t}</p>
                  </div>
                </div>
              )}
              {space.phones.map((p) => (
                <div>
                  <span>
                    <FiPhone className="me-2" size={20} color="#6ebd00" />
                  </span>

                  <span key={p.id}>
                    {p.nome}: {p.number}
                  </span>
                </div>
              ))}{' '}
              <div className="">
                <AiOutlineClockCircle
                  className="me-2"
                  size={20}
                  color="#6ebd00"
                />
              </div>
              {space.horario_funcionamento.map((p) => (
                <div className="d-flex mb-3">
                  <div>
                    <span style={{ fontWeight: 700 }} key={p.id}>
                      {p.label}
                    </span>
                    <span>
                      {p.horario.abre} às {p.horario.fecha}
                    </span>
                  </div>
                </div>
              ))}
              {Array.isArray(space.dicas_t) && (
                <div className="mt-4">
                  <Title>Dicas</Title>

                  <p>{space.dicas_t}</p>
                </div>
              )}
              {Array.isArray(space.restricoes) && space.restricoes.length > 0 && (
                <div className="mt-4">
                  <Title>Restrições</Title>

                  <Row className="row-cols-3">
                    {space.restricoes.map((p) => (
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
export default memo(Space)
