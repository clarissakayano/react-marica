import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { usePoints } from 'context/PontosContext'

import Footer from 'components/Footer/Footer'
import PointCard from 'components/PointCard/PointCard'

import useTitle from 'hooks/useTitle'

import { BgColor, CategoriesColor, Inp, Title } from './styles'

const TouristicsPoints: React.FC = () => {
  const [search, setSearch] = useState('')
  const { fetchPoints, points, isLoading, error, categories, searchPoints } =
    usePoints()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => searchPoints(search),
    [searchPoints, search],
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
    <>
      <Header />
      <BgColor>
        <Container className="flex-grow-1">
          <Row className="mt-3 pt-3 pt-md-4 pb-4">
            <Col className="col-md-6">
              <div className="d-flex align-items-center mb-4 mb-md-0">
                <div className="d-flex">
                  <Link to="/">
                    <AiOutlineArrowLeft
                      size="22"
                      height="22"
                      width="22"
                      className="me-2"
                    />
                  </Link>
                </div>
                <div>
                  <Title>Pontos Turísticos</Title>
                </div>
              </div>
            </Col>
            <Col>
              <div className="flex-grow-1">
                <Inp>
                  <input
                    type="text"
                    placeholder="Buscar Pontos Turísticos"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button
                    className="flex-shrink"
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
            {!isLoading &&
              !error &&
              categories.map((category) => (
                <ul key={category.id}>
                  <li className="d-flex ">
                    <CategoriesColor className="me-2">
                      {category.label}
                    </CategoriesColor>
                  </li>
                </ul>
              ))}
          </div>
          <div className="d-flex flex-wrap mb-4 mt-2 g-3">
            {!isLoading &&
              points.map((point) => (
                <Row key={point.id} className="flex-nowrap flex-md-wrap">
                  <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                    <PointCard point={point} />
                  </Col>
                </Row>
              ))}
          </div>
        </Container>
      </BgColor>
      <Footer />
    </>
  )
}
export default memo(TouristicsPoints)
