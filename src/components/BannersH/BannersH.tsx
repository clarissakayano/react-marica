import { memo } from 'react'

import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import calendar from 'assets/bannercalendario.jpeg'
import music from 'assets/bannerl.jpeg'
import calendarsm from 'assets/calendarsm.jpeg'
import musics from 'assets/musics.jpeg'

import { useBanners } from 'context/BannerContext'

import { BannerType } from 'components/types/BannerType'

const BannersH: React.FC = () => {
  const { banners, banner } = useBanners()
  console.log('banners', banner)

  return (
    <div>
      {banners.map((banner) => (
        <Carousel key={banner.id}>
          <Carousel.Item>
            <img
              className="d-block w-100 d-none d-md-inline"
              src={banner.image_l}
              alt="First slide"
            />
            <img
              className="d-md-none img-fluid"
              src={banner.image_s}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      ))}
    </div>
  )
}
export default memo(BannersH)
