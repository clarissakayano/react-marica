import { memo, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { usePoints } from 'context/PontosContext'

import ItemCard from 'components/Cards/ItemCard'
import CategoryCard from 'components/CategoryCard/CategoryCard'
import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { CategoriesColor } from './styles'

const TouristicsPoints: React.FC = () => {
  const [search, setSearch] = useState('')
  const { fetchPoints, points, isLoading, error, categories} = usePoints()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  // const handleSearch = useCallback(
  //   () => fetchPoints(search),
  //   [fetchPoints, search],
  // )

  useEffect(() => {
    console.log('useEffect')
    fetchPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('PontosTuristicos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  console.log('page')
  return (
    <>
      <Header />
      <Container>
        <h1>Pontos Turísticos</h1>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          !error &&
          categories.map((category) => (
            <div key={category.id}>
              <div className="d-flex wrap">
                <CategoriesColor>{category.label}</CategoriesColor>
              </div>
            </div>
          ))}

          {!isLoading && points.map((point) => (
            <PointCard point={point} />
          ))}
          
      </Container>
      <Footer />
    </>
  )
}
export default memo(TouristicsPoints)
