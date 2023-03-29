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
        <BgColor className="d-flex flex-column">
          <Container className="flex-grow-1">
            <Row className=" pt-3 pt-md-4 pb-4 ">
              <Col className="d-flex col-md-6">
                <div>
                  <TitlePage title="Pontos Turisticos" to="/" />
                </div>
              </Col>
              <Col className="col-md-6 d-flex">
                <Mapbutton to="/" />

                <div className="flex-grow-1 ">
                  <Inp>
                    <input
                      type="text"
                      placeholder="Buscar pontos turísticos"
                      className="border-0 mx-3 py-2 w-100"
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
                {!isLoading && !error && points.length === 0 && (
                  <h2>Nenhum resultado encontrado</h2>
                )}
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

            {!isLoading && (
              <div className="pd">
                <Row className="justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {points.map((point) => (
                    <Col className="d-flex mb-3 mb-md-5 px-1" key={point.id}>
                      <PointCard point={point} />
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {!isLoading && !error && points.length === 0 && (
              <div className="d-flex justify-content-center">
                <h2>Nenhum resultado encontrado</h2>
              </div>
            )}
          </Container>
        </BgColor>
      )}
      <Footer />
    </Wrapper>
  )
}
export default memo(TouristicsPoints)
