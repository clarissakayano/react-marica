import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { useHotels } from 'context/HotelEPousadaContext'

import CategoriesPillsComponents from 'components/CategoriesPillsComponents'
import Footer from 'components/Footer/Footer'
import { Wrapper } from 'components/Footer/styles'
import GeralCard from 'components/GeralCard/GeralCard'
import Mapbutton from 'components/MapButton/Mapbutton'
import PointCard from 'components/PointCard/PointCard'
import TitlePage from 'components/TitlePage'

import useTitle from 'hooks/useTitle'

import { BgColor, Inp } from './styles'

const HoteisEPousadas: React.FC = () => {
  const [search, setSearch] = useState('')
  const { fetchHotels, hotels, isLoading, error, categories, searchHotels } =
    useHotels()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => searchHotels(search),
    [searchHotels, search],
  )

  useEffect(() => {
    fetchHotels()
    console.log('fetchHotelsPAGE', fetchHotels)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('HoteisEPousadas')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  console.log('page')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Wrapper>
      <Header />
      {!isLoading && !error && (
        <BgColor className="d-flex flex-column">
          <Container className="flex-grow-1">
            <Row className=" pt-3 pt-md-4 pb-4 ">
              <Col className="d-flex col-md-6">
                <div>
                  <TitlePage title="Hotéis e Pousadas" to="/" />
                </div>
              </Col>
              <Col className="col-md-6 d-flex">
                <Mapbutton to="/" />

                <div className="flex-grow-1">
                  <Inp>
                    <input
                      className="border-0 mx-3 py-2 w-100"
                      type="text"
                      placeholder="Buscar hotéis e pousadas"
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
            </Row>

            <div className="d-flex flex-wrap mb-4 mt-2">
              {isLoading && <p>Loading...</p>}
              {!isLoading && !error && (
                <CategoriesPillsComponents
                  loading={isLoading}
                  error={error}
                  categories={categories}
                />
              )}
            </div>

            {!isLoading && (
              <div className="pd">
                <Row className="justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {hotels.map((hotel) => (
                    <Col className="d-flex mb-3 mb-md-5 px-1" key={hotel.id}>
                      <GeralCard item={hotel} pagelink="hoteis-e-pousadas" />
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {!isLoading && !error && hotels.length === 0 && (
              <div className="d-flex justify-content-center">
                <h2>Nenhum resultado encontrado</h2>
              </div>
            )}
          </Container>
        </BgColor>
      )}
      <Footer />
    </Wrapper>
  )
}
export default memo(HoteisEPousadas)
