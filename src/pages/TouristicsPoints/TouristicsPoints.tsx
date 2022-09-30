import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {  BiSearch} from 'react-icons/bi';
import { usePoints } from 'context/PontosContext'

import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { BgColor, CategoriesColor, } from './styles'
import PointCard from 'components/PointCard/PointCard'

const TouristicsPoints: React.FC = () => {
  const [search, setSearch] = useState('')
  const { fetchPoints, points, isLoading, error, categories,searchPoints} = usePoints()

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
        <Row>
          <Col> <h1>Pontos Turísticos</h1>
          </Col>
          <Col>
          <input
        type="text"
        placeholder="Buscar Pontos Turísticos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="button" onClick={handleSearch}>
      <BiSearch />
      </Button>
          </Col>
        </Row>

        <div className="d-flex flex-wrap mb-4 mt-2">
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          !error &&
          categories.map((category) => (

            <ul key={category.id}>
              <li className="d-flex flex-nowrap overflow-sm-scroll">
                <CategoriesColor>{category.label}</CategoriesColor>
              </li>
            </ul>
          ))}
          </div>
          <div className="d-flex flex-wrap mb-4 mt-2 g-3">
          {!isLoading && points.map((point) => (
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
