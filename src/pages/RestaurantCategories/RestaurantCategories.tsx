import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'

import { useHotels } from 'context/HotelEPousadaContext'
import { useRestaurants } from 'context/RestaurantesContext'

import Footer from 'components/Footer/Footer'
import GeralCard from 'components/GeralCard/GeralCard'
import Mapbutton from 'components/MapButton/Mapbutton'

import useTitle from 'hooks/useTitle'

import { BgColor, Inp, Title, Wrapper } from './styles'

const RestaurantCategories: React.FC = () => {
  const [search, setSearch] = useState('')
  const {
    restaurants,
    isLoading,
    error,
    categories,
    fetchCategory,
    searchRestaurants,
  } = useRestaurants()

  const { id } = useParams()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchCategory(Number(id))
  }, [fetchCategory, id])

  const handleSearch = useCallback(
    () => searchRestaurants(search),
    [searchRestaurants, search],
  )

  const restaurantNomalized = categories.find(
    (restaurant) => restaurant.id === Number(id),
  )

  useEffect(() => {
    setTitle('PontosTuristicos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Wrapper>
      <Header />
      {!isLoading && !error && (
        <BgColor>
          <Container className="flex-grow-1">
            <Row className="mt-2 pt-3 pt-md-4 pb-4">
              <Col className="col-md-6">
                <div>
                  <a href="/bares-e-restaurantes">
                    <span>Bares e Restaurantes</span>

                    <Title>
                      {' '}
                      <AiOutlineArrowLeft
                        size="22"
                        height="22"
                        width="22"
                        color="black"
                        className="me-1"
                      />
                      {restaurantNomalized?.label}
                    </Title>
                  </a>
                </div>
              </Col>
              <Col className="col-md-3 d-flex">
                <Mapbutton to="/" />

                <div className="flex-grow-1">
                  <Inp>
                    <input
                      type="text"
                      placeholder="Buscar bares e restaurantes"
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
              </Col>

              <div className="d-flex flex-wrap mb-4 mt-2 g-3">
                {!isLoading &&
                  restaurants.map((restaurant) => (
                    <Row
                      key={restaurant.id}
                      className="flex-nowrap flex-md-wrap"
                    >
                      <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                        <Link to={`/bares-e-restaurantes/${restaurant.id}`}>
                          <GeralCard item={restaurant} />
                        </Link>
                      </Col>
                    </Row>
                  ))}
              </div>

              {!isLoading && !error && restaurants.length === 0 && (
                <div className="d-flex justify-content-center">
                  <h2>Nenhum resultado encontrado</h2>
                </div>
              )}
            </Row>
          </Container>
        </BgColor>
      )}
      <Footer />
    </Wrapper>
  )
}
export default memo(RestaurantCategories)
