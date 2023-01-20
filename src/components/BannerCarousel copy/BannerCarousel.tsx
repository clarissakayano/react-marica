import { memo, useCallback, useEffect, useState } from 'react'

import axios from 'axios'
import { Carousel } from 'react-bootstrap'

import { BannerType } from 'components/types/BannerType'

import Api from 'services/Api'

interface IBannerProps {
  children?: React.ReactNode
}
const BannerC: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [banners, setBanners] = useState<BannerType[]>([])

  const fetchBanners = useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await Api.get(`/banners/`)
      console.log('results', data)
    } catch {
      console.log('Não foi possível carregar')
    } finally {
      console.log('Foi')
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBanners()
  }, [fetchBanners])

  return (
    <>
      <h2>banner</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        banners.map((banner) => (
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="/assets" alt="banner slide" />
            </Carousel.Item>
          </Carousel>
        ))}
    </>
  )
}

export default memo(BannerC)
