import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { usePoints } from 'context/PontosContext'

import ItemCard from 'components/Cards/ItemCard'
import CategoryCard from 'components/CategoryCard/CategoryCard'

import useTitle from 'hooks/useTitle'

const TouristicsPoints: React.FC = () => {
  const [search, setSearch] = useState('')
  const { fetchPoints, points, isLoading, error } = usePoints()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { id } = useParams()

  const handleSearch = useCallback(
    () => fetchPoints(search),
    [fetchPoints, search],
  )

  useEffect(() => {
    setTitle('Pontos-Turisticos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <Container>
        {isLoading && <p>Loading...</p>}
        {!isLoading && !error && (
          <Row>
            {points.map((category) => (
              <div key={category.id}>
                <Col>
                  <CategoryCard category={category} />
                  <h3>{category.name}</h3>
                </Col>
              </div>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}
export default memo(TouristicsPoints)
