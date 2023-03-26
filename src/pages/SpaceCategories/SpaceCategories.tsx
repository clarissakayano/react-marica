import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'

import { useRestaurants } from 'context/RestaurantesContext'
import { useSpaces } from 'context/SpaceContext'

import Footer from 'components/Footer/Footer'
import GeralCard from 'components/GeralCard/GeralCard'
import Mapbutton from 'components/MapButton/Mapbutton'

import useTitle from 'hooks/useTitle'

import { BgColor, Inp, Title, Wrapper } from './styles'

const SpaceCategories: React.FC = () => {
  const [search, setSearch] = useState('')
  const {
    spaces,
    isLoading,
    error,
    categories,
    fetchCategory,
    fetchsearchSpaces,
  } = useSpaces()

  const { id } = useParams()

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    if (id) fetchCategory(Number(id))
  }, [fetchCategory, id])
  const handleSearch = useCallback(
    () => fetchsearchSpaces(search),
    [fetchsearchSpaces, search],
  )

  const titleNomalized = categories.find((space) => space.id === Number(id))

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
                  <a href="/espacos">
                    <span>Espaços para Eventos</span>

                    <Title>
                      {' '}
                      <AiOutlineArrowLeft
                        size="22"
                        height="22"
                        width="22"
                        color="black"
                        className="me-1"
                      />
                      {titleNomalized?.label}
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
                <div className="d-flex flex-wrap mb-4 mt-2 g-3">
                  {!isLoading &&
                    spaces.map((space) => (
                      <Row key={space.id} className="flex-nowrap flex-md-wrap">
                        <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                          <Link to={`/espacos/${space.id}`}>
                            <GeralCard item={space} />
                          </Link>
                        </Col>
                      </Row>
                    ))}
                </div>
              </div>
              {!isLoading && !error && spaces.length === 0 && (
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
export default memo(SpaceCategories)
