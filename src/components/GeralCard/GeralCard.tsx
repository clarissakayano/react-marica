import { memo } from 'react'

import Card from 'react-bootstrap/Card'

import { CommerceType } from 'components/types/CommerceType'
import { EventType } from 'components/types/EventType'
import { HotelType } from 'components/types/HotelType'
import { RestaurantType } from 'components/types/RestaurantType'
import {
  SpaceEventsCategoryType,
  SpaceEventsType,
} from 'components/types/SpaceEventsType'

import { Card1, CardText, CardTitle, CategoryText, Cover } from './styles'

// <Link style={{ textDecoration: 'none' }} to={`item/${item.id}`} />

interface ICollectionTypeProps {
  item: SpaceEventsType | HotelType | RestaurantType | CommerceType | EventType
  children?: React.ReactNode
  endPoint?: string
}
const GeralCard: React.FC<ICollectionTypeProps> = ({ item }) => (
  <Card1 className="d-flex flex-column h-100" style={{ width: '18rem' }}>
    <Cover className="mb-2  img-fluid" aspectRatio="1x1" capa={item.capa}>
      <div />
    </Cover>

    <Card.Body>
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
