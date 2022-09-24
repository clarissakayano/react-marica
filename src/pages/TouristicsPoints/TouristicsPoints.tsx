import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { usePoints } from 'context/PontosContext'

import ItemCard from 'components/Cards/ItemCard'

import useTitle from 'hooks/useTitle'

const TouristicsPoints: React.FC = () => {
  const [search, setSearch] = useState('')
  const { fetchPoints, points, isLoading } = usePoints()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Pontos-Turisticos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        points.map((point) => (
          <div key={point.id}>
            <h3>{point.name}</h3>
          </div>
        ))}
    </>
  )
}
export default memo(TouristicsPoints)
