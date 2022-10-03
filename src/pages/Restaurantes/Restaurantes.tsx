import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { useRestaurants } from 'context/RestaurantesContext'

import Footer from 'components/Footer/Footer'
import GeralCard from 'components/GeralCard/GeralCard'

import useTitle from 'hooks/useTitle'

import { BgColor, CategoriesColor } from './styles'

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
            <Col>
              <Link to="/">
                <h1>Bares e Restaurantes</h1>
              </Link>
            </Col>
            <Col>
              <input
                type="text"
                placeholder="Buscar Pontos Turísticos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="button" onClick={handleSearch}>
                <BiSearch color="black" />
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
                    <CategoriesColor className="me-3">
                      {category.label}
                    </CategoriesColor>
                  </li>
                </ul>
              ))}
          </div>
          <div className="d-flex flex-wrap mb-4 mt-2 g-3">
            {!isLoading &&
              restaurants.map((restaurant) => (
                <Row key={restaurant.id} className="flex-nowrap flex-md-wrap">
                  <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                    <Link to={`/restaurantes/${restaurant.id}`}>
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
