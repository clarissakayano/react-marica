import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { useSpaces } from 'context/SpaceContext'

import CategoriesPillsComponents from 'components/CategoriesPillsComponents'
import Footer from 'components/Footer/Footer'
import GeralCard from 'components/GeralCard/GeralCard'
import Mapbutton from 'components/MapButton/Mapbutton'
import TitlePage from 'components/TitlePage'

import useTitle from 'hooks/useTitle'

import { BgColor, CategoriesColor, Inp } from './styles'

const Spaces: React.FC = () => {
  const [search, setSearch] = useState('')
  const {
    fetchSpaces,
    spaces,
    isLoading,
    error,
    categories,
    fetchsearchSpaces,
  } = useSpaces()
  console.log('categories', categories)

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => fetchsearchSpaces(search),
    [fetchsearchSpaces, search],
  )

  useEffect(() => {
    fetchSpaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('Spaces')
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
              <div>
                <TitlePage title="Espaços para Eventos" to="/" />
              </div>
            </Col>
            <Col className="col-md-3 d-flex">
              <Mapbutton to="/" />

              <div className="flex-grow-1">
                <Inp>
                  <input
                    type="text"
                    placeholder="Buscar espaços para eventos"
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
              spaces.map((space) => (
                <Row key={space.id} className="flex-nowrap flex-md-wrap">
                  <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                    <Link to={`/espaco/${space.id}`}>
                      <GeralCard item={space} />
                    </Link>
                  </Col>
                </Row>
              ))}
          </div>
          <div className="d-flex justify-content-center">
            <h2>Nenhum resultado encontrado</h2>
          </div>
        </Container>
      </BgColor>
      <Footer />
    </>
  )
}
export default memo(Spaces)
