import { memo } from 'react'

import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import { TouristicPointType } from 'components/types/ TouristicPointType'
import { CollectionType } from 'components/types/CollectionType'
import { SpaceEventsType } from 'components/types/SpaceEventsType'

import { Card1, CardText, CardTitle, CategoryText, Cover } from './styles'

// <Link style={{ textDecoration: 'none' }} to={`item/${item.id}`} />

interface ITouristicPointTypeProps {
  point: TouristicPointType | SpaceEventsType
  children?: React.ReactNode
  endPoint?: string
}
const PointCard: React.FC<ITouristicPointTypeProps> = ({ point }) => (
  <Card1 className="d-flex flex-column h-100" style={{ width: '18rem' }}>
    <Link to={`/pontos/${point.id}`}>
      <Cover className="mb-2  img-fluid" aspectRatio="1x1" capa={point.capa}>
        <div />
      </Cover>
    </Link>
    <Card.Body>
      <CardTitle>{point.nome}</CardTitle>
      <ul className="flex-wrap mt-2">
        {point.categorias.slice(0, 4).map((categorias) => (
          <li
            key={categorias.id}
            className="mt-2 px-1 mb-2"
            style={{ textDecoration: 'none' }}
          >
            <CategoryText>{categorias.label}</CategoryText>
          </li>
        ))}
      </ul>
      {point.enderecos.map((endereco) => (
        <CardText className="mt-5 mb-2" key={endereco.id}>
          {endereco.label}
        </CardText>
      ))}
    </Card.Body>
  </Card1>
)
export default memo(PointCard)
