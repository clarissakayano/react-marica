import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { useCommerces } from 'context/CommerceContext'

import CategoriesPillsComponents from 'components/CategoriesPillsComponents'
import Footer from 'components/Footer/Footer'
import GeralCard from 'components/GeralCard/GeralCard'
import Mapbutton from 'components/MapButton/Mapbutton'
import TitlePage from 'components/TitlePage'

import useTitle from 'hooks/useTitle'

import { BgColor, CategoriesColor, Inp, Title } from './styles'

const Comercios: React.FC = () => {
  const [search, setSearch] = useState('')
  const {
    fetchCommerces,
    commerces,
    isLoading,
    error,
    categories,
    searchCommerces,
  } = useCommerces()

  console.log('useCommerces', useCommerces)

  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  const handleSearch = useCallback(
    () => searchCommerces(search),
    [searchCommerces, search],
  )

  useEffect(() => {
    fetchCommerces()
    console.log('fetchCommercesPAGE', fetchCommerces)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('Comercios')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  console.log('page')
  return (
    <>
      <Header />
      <BgColor className="d-flex flex-column">
        <Container className="flex-grow-1">
          <Row className="mt-3 pt-3 pt-md-4 pt-md-4 pb-4">
            <Col className="d-flex col-md-6">
              <div>
                <TitlePage title="Comércio Local" to="/" />
              </div>
            </Col>
            <Col className="col-md-6 d-flex">
              <Mapbutton to="/" />

              <div className="flex-grow-1">
                <Inp>
                  <input
                    type="text"
                    placeholder="Buscar comércio local"
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
                  {commerces.map((commerce) => (
                    <Col className="d-flex mb-3 mb-md-5" key={commerce.id}>
                      <GeralCard item={commerce} pagelink="comercio-local" />
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {!isLoading && !error && commerces.length === 0 && (
              <div className="d-flex justify-content-center">
                <h2>Nenhum resultado encontrado</h2>
              </div>
            )}
          </Row>
        </Container>
      </BgColor>
      <Footer />
    </>
  )
}
export default memo(Comercios)
