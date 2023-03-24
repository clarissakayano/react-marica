import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { useRestaurants } from 'context/RestaurantesContext'

import Footer from 'components/Footer/Footer'
import GeralCard from 'components/GeralCard/GeralCard'
import Mapbutton from 'components/MapButton/Mapbutton'

import { strToSlug } from 'helpers'

import useTitle from 'hooks/useTitle'

import { BgColor, CategoriesColor, Inp, Title } from './styles'

const Restaurantes: React.FC = () => {
  const [search, setSearch] = useState('')
  const {
    fetchRestaurants,
    restaurants,
    isLoading,
    error,
    categories,
    searchRestaurants,
  } = useRestaurants()

  console.log('useRestaurants', useRestaurants)

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => searchRestaurants(search),
    [searchRestaurants, search],
  )

  useEffect(() => {
    fetchRestaurants()
    console.log('fetchRestaurantsPAGE', fetchRestaurants)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('Bares e Restaurantes')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  console.log('page')
  return (
    <>
      <Header />
      <BgColor>
        <Container className="flex-grow-1">
          <Row className="mt-3">
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
                  <Title>Bares e Restaurantes</Title>
                </div>
              </div>
            </Col>
            <Col className="col-md-3 d-flex">
              <Mapbutton to="/" />

              <div className="flex-grow-1">
                <Inp>
                  <input
                    type="text"
                    placeholder="Busca bares e restaurantes"
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
                  <Link
                    className="button button-md"
                    to={`/${category}/categorias/${category.id}/${strToSlug(
                      category.label,
                    )}`}
                  >
                    {category.label}
                  </Link>
                </ul>
              ))}
          </div>
          <div className="d-flex flex-wrap mb-4 mt-2 g-3">
            {!isLoading &&
              restaurants.map((restaurant) => (
                <Row key={restaurant.id} className="flex-nowrap flex-md-wrap">
                  <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                    <Link to={`/bares-e-restaurantes/${restaurant.id}`}>
                      <GeralCard item={restaurant} />
                    </Link>
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
export default memo(Restaurantes)
