import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'

import { usePoints } from 'context/PontosContext'

import Footer from 'components/Footer/Footer'
import Mapbutton from 'components/MapButton/Mapbutton'
import PointCard from 'components/PointCard/PointCard'
import TitlePage from 'components/TitlePage'
import { AddressType } from 'components/types/CollectionType'

import useTitle from 'hooks/useTitle'

import { BgColor, Inp, Title, Wrapper } from './styles'

const TouristicsPointsCategories: React.FC = () => {
  const [search, setSearch] = useState('')
  const {
    fetchPoints,
    points,
    isLoading,
    error,
    categories,
    fetchSearchPoints,
    fetchCategory,
    setCategory,
    fetchPoint,
  } = usePoints()

  const { id } = useParams()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchCategory(Number(id))
  }, [fetchCategory, id])

  const handleSearch = useCallback(
    () => fetchSearchPoints(search),
    [fetchSearchPoints, search],
  )

  const pointNomalized = categories.find((point) => point.id === Number(id))

  useEffect(() => {
    setTitle('PontosTuristicos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Wrapper>
      <Header />
      <BgColor>
        <Container className="flex-grow-1">
          <Row className="mt-2 pt-3 pt-md-4 pb-4">
            <Col className="col-md-6">
              <div>
                <a href="/pontos">
                  <span>Pontos Turísticos</span>

                  <Title>
                    {' '}
                    <AiOutlineArrowLeft
                      size="22"
                      height="22"
                      width="22"
                      color="black"
                      className="me-1"
                    />
                    {pointNomalized?.label}
                  </Title>
                </a>
              </div>
            </Col>
            <Col className="col-md-3 d-flex">
              <Mapbutton to="/" />

              <div className="flex-grow-1">
                <Inp>
                  <input
                    type="text"
                    placeholder="Buscar Pontos Turísticos"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button
                    className="flex-shrink btnsearch"
                    type="submit"
                    onClick={handleSearch}
                  >
                    <BiSearch color="black" />
                  </Button>
                </Inp>
              </div>
            </Col>

            <div className="d-flex flex-wrap mb-4 mt-2 g-3">
              {!isLoading &&
                !error &&
                points.map((point) => (
                  <Row key={point.id} className="flex-nowrap flex-md-wrap">
                    <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                      <PointCard point={point} />
                    </Col>
                  </Row>
                ))}
            </div>
          </Row>
        </Container>
      </BgColor>
      <Footer />
    </Wrapper>
  )
}
export default memo(TouristicsPointsCategories)
