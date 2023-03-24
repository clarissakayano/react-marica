import { memo, useCallback, useEffect, useState } from 'react'

import Header from 'Header/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { useCommerces } from 'context/CommerceContext'

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
      <BgColor>
        <Container className="flex-grow-1">
          <Row className="mt-3 pt-3 pt-md-4 pb-4">
            <Col className="col-md-6">
              <div>
                <TitlePage title="Comércio Local" to="/" />
              </div>
            </Col>
            <Col className="col-md-3 d-flex">
              <Mapbutton to="/" />

              <div className="flex-grow-1">
                <Inp>
                  <input
                    type="text"
                    placeholder="Buscar comércio local"
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
                commerces.map((commerce) => (
                  <Row key={commerce.id} className="flex-nowrap flex-md-wrap">
                    <Col className="col-md-6 col-lg-4 mb-3 mb-md-5">
                      <Link to={`/comercio-local/${commerce.id}`}>
                        <GeralCard item={commerce} />
                      </Link>
                    </Col>
                  </Row>
                ))}
            </div>
          </Row>
        </Container>
      </BgColor>
      <Footer />
    </>
  )
}
export default memo(Comercios)
