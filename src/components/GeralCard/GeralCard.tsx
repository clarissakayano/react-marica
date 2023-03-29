import { memo } from 'react'

import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import { CollectionType } from 'components/types/CollectionType'
import { CommerceType } from 'components/types/CommerceType'
import { EventType } from 'components/types/EventType'
import { HotelType } from 'components/types/HotelType'
import { RestaurantType } from 'components/types/RestaurantType'
import { SpaceEventsType } from 'components/types/SpaceEventsType'

import { strToSlug } from 'helpers'

import { Card1, CardText, CardTitle, CategoryText, Cover } from './styles'

// <Link style={{ textDecoration: 'none' }} to={`item/${item.id}`} />

interface ICollectionTypeProps {
  item:
    | CollectionType
    | SpaceEventsType
    | HotelType
    | RestaurantType
    | CommerceType
    | EventType
  children?: React.ReactNode
  endPoint?: string
  pagelink: string
}
const GeralCard: React.FC<ICollectionTypeProps> = ({ item, pagelink }) => (
  <Card1 className="d-flex flex-column w-100">
    <Link to={`/${pagelink}/${item.id}`}>
      <Cover className="mb-2 img-fluid" aspectRatio="1x1" capa={item.capa}>
        <div />
      </Cover>
    </Link>

    <Card.Body className="p-3">
      <CardTitle>{item.nome}</CardTitle>
      <ul className="flex-wrap mt-2">
        {item.categorias.slice(0, 4).map((categorias) => (
          <li
            key={categorias.id}
            className="mt-2 px-1 mb-2"
            style={{ textDecoration: 'none' }}
          >
            <CategoryText>{categorias.label}</CategoryText>
          </li>
        ))}
      </ul>
      {item.enderecos.map((address) => (
        <CardText className="mt-5 mb-2" key={address.id}>
          {address.label}
        </CardText>
      ))}
    </Card.Body>
  </Card1>
)
export default memo(GeralCard)
