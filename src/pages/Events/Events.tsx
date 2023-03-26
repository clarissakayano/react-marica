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
      <BgColor>
        <Container className="flex-grow-1">
          <Row className="mt-3">
            <Col className="col-md-6">
              <div>
                <TitlePage title="Eventos" to="/" />
              </div>
            </Col>
            <Col className="col-md-3 d-flex">
              <Mapbutton to="/" />

              <div className="flex-grow-1">
                <Inp>
                  <input
                    type="text"
                    placeholder="Buscar eventos"
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
          <div className="d-flex flex-wrap mb-4 mt-2 g-3">
            {!isLoading &&
              events.map((event) => (
                <Row key={event.id} className="flex-nowrap flex-md-wrap">
                  <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                    <Link to={`/eventos/${event.id}`}>
                      <GeralCard item={event} />
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
export default memo(Events)
