import { memo } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { useBanners } from 'context/BannerContext'

const BannersH: React.FC = () => {
  const { banners } = useBanners()

  return (
    <Carousel>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
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
      ))}
    </Carousel>
  )
}
export default memo(BannersH)
