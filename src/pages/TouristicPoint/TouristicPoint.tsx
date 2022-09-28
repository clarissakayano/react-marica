import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { usePoints } from 'context/PontosContext'

import ItemCard from 'components/Cards/ItemCard'

import useTitle from 'hooks/useTitle'

const TouristicPoint: React.FC = () => {
  const { fetchPoint, point, isLoading, error } = usePoints()

  const { id } = useParams()

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
      {!isLoading && point && <p>{point.name}</p>}
      {!isLoading && !error && point && (
        <Carousel>{!isLoading && !error && Array}</Carousel>
      )}
    </>
  )
}
export default memo(TouristicPoint)
