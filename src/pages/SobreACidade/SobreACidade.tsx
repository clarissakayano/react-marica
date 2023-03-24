import { memo, useEffect } from 'react'

import Header from 'Header/Header'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'


import Footer from 'components/Footer/Footer'

import useTitle from 'hooks/useTitle'

import { AboutBg, BgImg} from './styles'
import AboutCard from 'components/AboutCard/AboutCard'
import { useAbout } from 'context/SobreContext'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { BgColor } from 'Header/styles'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const SobreACidade: React.FC<IBaseComponentProps> = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, about, error } = useAbout()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      {loading && (
        <div className="d-flex justify-content-center mt-5 mb-5">

            <p>Carregando informações...</p>

        </div>
      )}
      {!loading && !error && (
        <>
          <BgImg />
          <Container>
            <AboutBg className="d-flex flex-column py-5">
              <div className="d-flex flex-column py-2 px-5">
                <div className="d-flex">
                  <Link to="/" className="mt-1 me-2">
                    <HiOutlineArrowLeft color='black' size={18} />
                  </Link>
                  <h1 className="d-flex mb-4">Conheça Maricá</h1>
                </div>
                  <div
                  dangerouslySetInnerHTML={{ __html: about?.sobre?.content! }}
                />
                </div>
            </AboutBg>
          </Container>
        </>
      )}

      <Footer />
    </>
  )
}

export default memo(SobreACidade)
