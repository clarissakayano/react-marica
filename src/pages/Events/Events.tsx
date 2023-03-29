import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { useEvents } from 'context/EventContext '

import CategoriesPillsComponents from 'components/CategoriesPillsComponents'
import Footer from 'components/Footer/Footer'
import GeralCard from 'components/GeralCard/GeralCard'
import Mapbutton from 'components/MapButton/Mapbutton'
import TitlePage from 'components/TitlePage'

import useTitle from 'hooks/useTitle'

import { BgColor, CategoriesColor, Inp } from './styles'

const Events: React.FC = () => {
  const [search, setSearch] = useState('')
  const {
    events,
    isLoading,
    error,
    categories,
    fetchEvents,
    fetchSearchEvents,
  } = useEvents()

  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => fetchSearchEvents(search),
    [fetchSearchEvents, search],
  )

  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('Eventos | Conheça Maricá | Guia Turistico')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      {!isLoading && !error && (
        <BgColor>
          <Container className="flex-grow-1">
            <Row className="mt-3">
              <Col className="col-md-6">
                <div>
                  <TitlePage title="Eventos" to="/" />
                </div>
              </Col>
              <Col className="col-md-6 d-flex">
                <Mapbutton to="/" />

                <div className="flex-grow-1">
                  <Inp>
                    <input
                      type="text"
                      placeholder="Buscar eventos"
                      className="border-0 mx-3 py-2 w-100"
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
                <Row className="justify-content-start row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {events.map((event) => (
                    <Col className="d-flex mb-3 mb-md-5 px-1" key={event.id}>
                      <GeralCard item={event} pagelink="eventos" />
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {!isLoading && !error && events.length === 0 && (
              <div className="d-flex justify-content-center">
                <h2>Nenhum resultado encontrado</h2>
              </div>
            )}
          </Container>
        </BgColor>
      )}
      <Footer />
    </>
  )
}
export default memo(Events)
