import { memo, ReactElement, useCallback, useEffect, useState } from 'react'

import axios from 'axios'

import { BannerType } from 'components/types/BannerType'

import Api from 'services/Api'
import { Carousel, CarouselItem, NavItem } from 'react-bootstrap'
import { Cover } from './styles'

interface IBannerProps {
  children?: React.ReactNode
}
const BannerC: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [banners, setBanners] = useState<BannerType[]>([])

  const fetchBanners = useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await Api.get(`/banners`)
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

      <h2>banner</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && banners.map((banner) => (
        <Carousel>
          <Carousel.Item >
          <Cover capa={Item.capa} />
          </Carousel.Item>
         <Carousel />

  )
}

export default memo(BannerC)
