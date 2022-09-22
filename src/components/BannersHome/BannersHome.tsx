import { memo } from 'react'

import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import calendar from 'assets/bannercalendario.jpeg'
import music from 'assets/bannerl.jpeg'
import calendarsm from 'assets/calendarsm.jpeg'
import musics from 'assets/musics.jpeg'

const BannersHome: React.FC = () => (
  <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 d-none d-md-inline"
          src={calendar}
          alt="First slide"
        />
        <img
          className="d-md-none img-fluid"
          src={calendarsm}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 d-none d-md-inline"
          src={music}
          alt="Second slide"
        />
        <img className="d-md-none img-fluid" src={musics} alt="Second Slide" />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default memo(BannersHome)
