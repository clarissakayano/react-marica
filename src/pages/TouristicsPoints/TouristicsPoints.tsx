import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BiSearch } from 'react-icons/bi'

import { usePoints } from 'context/PontosContext'

import CategoriesPillsComponents from 'components/CategoriesPillsComponents'
import Footer from 'components/Footer/Footer'
import Mapbutton from 'components/MapButton/Mapbutton'
import PointCard from 'components/PointCard/PointCard'
import TitlePage from 'components/TitlePage'

import useTitle from 'hooks/useTitle'

import { BgColor, Inp, Wrapper } from './styles'

const TouristicsPoints: React.FC = () => {
  const [search, setSearch] = useState('')
  const {
    fetchPoints,
    points,
    isLoading,
    error,
    categories,
    fetchSearchPoints,
    setCategory,
    fetchCategory,
  } = usePoints()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => fetchSearchPoints(search),
    [fetchSearchPoints, search],
  )

  useEffect(() => {
    fetchPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('PontosTuristicos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Wrapper>
      <Header />
      {!isLoading && !error && (
        <BgColor className="d-flex flex-column py-5">
          <Container>
            <Row className="mt-2 pt-3 pt-md-4 pb-4 ">
              <Col className="d-flex col-md-5">
                <div>
                  <TitlePage title="Pontos Turisticos" to="/" />
                </div>
              </Col>
              <Col className="col-md-3 d-flex">
                <Mapbutton to="/" />

                <div className="flex-grow-1 ">
                  <Inp>
                    <input
                      className="border-0 w-100"
                      type="text"
                      placeholder="Buscar pontos turísticos"
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
            </Row>

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
            <Row>
              <div className="d-flex flex-wrap mb-4 mt-2 g-3 justify-content-center">
                {!isLoading &&
                  points.map((point) => (
                    <Row key={point.id} className="flex-nowrap flex-md-wrap">
                      <Col className="col-md-2 col-lg-4 mb-3 mb-md-5">
                        <PointCard point={point} />
                      </Col>
                    </Row>
                  ))}
              </div>
              {!isLoading && !error && points.length === 0 && (
                <div className="d-flex justify-content-center">
                  <h2>Nenhum resultado encontrado</h2>
                </div>
              )}
            </Row>
          </Container>
        </BgColor>
      )}
      <Footer />
    </Wrapper>
  )
}
export default memo(TouristicsPoints)
