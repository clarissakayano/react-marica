import { memo, useCallback, useEffect } from 'react'

import Header from 'Header/Header'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { usePoints } from 'context/PontosContext'

import ItemCard from 'components/Cards/ItemCard'
import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

const TouristicPoint: React.FC = () => {
  const { fetchPoint, point, isLoading, error } = usePoints()

  const { id } = useParams()
  console.log('idP')
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    console.log('IDuseEffect')
    if (id) fetchPoint(id)
  }, [fetchPoint, id])

  useEffect(() => {
    setTitle('Pontos-Turisticos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  console.log('POINT', point)
  return (
    <>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <h2>Não foi possível carregar...</h2>}
      {!isLoading && !error && point && (
        <Carousel>
          {!isLoading &&
            !error &&
            Array.isArray(point?.images) &&
            point?.images.map((image) => (
              <Carousel.Item key={image.id}>
                <img src={image.src} alt="imagem" />
              </Carousel.Item>
            ))}
        </Carousel>
      )}
      <Footer />
    </>
  )
}
export default memo(TouristicPoint)
