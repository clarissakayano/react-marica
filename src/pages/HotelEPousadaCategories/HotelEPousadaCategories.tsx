import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'

import { useHotels } from 'context/HotelEPousadaContext'

import Footer from 'components/Footer/Footer'
import GeralCard from 'components/GeralCard/GeralCard'
import Mapbutton from 'components/MapButton/Mapbutton'

import useTitle from 'hooks/useTitle'

import { BgColor, Inp, Title, Wrapper } from './styles'

const HotelEpousadaCategories: React.FC = () => {
  const [search, setSearch] = useState('')
  const { hotels, isLoading, error, categories, fetchCategory, searchHotels } =
    useHotels()

  const { id } = useParams()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchCategory(Number(id))
  }, [fetchCategory, id])

  const handleSearch = useCallback(
    () => searchHotels(search),
    [searchHotels, search],
  )

  const pointNomalized = categories.find((point) => point.id === Number(id))

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
                  <a href="/hoteis-e-pousadas">
                    <span>Hotéis e Pousadas</span>

                    <Title>
                      {' '}
                      <AiOutlineArrowLeft
                        size="22"
                        height="22"
                        width="22"
                        color="black"
                        className="me-1"
                      />
                      {pointNomalized?.label}
                    </Title>
                  </a>
                </div>
              </Col>
              <Col className="d-flex col-md-6">
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
                {!isLoading && !error && hotels.length === 0 && (
                  <h2>Nenhum resultado encontrado</h2>
                )}
              </Col>
            </Row>
            {!isLoading && (
              <div className="pd">
                <Row className="justify-content-start row-cols-1 row-cols-md-2 row-cols-lg-3">
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
export default memo(HotelEpousadaCategories)
