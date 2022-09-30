import { memo } from 'react'

import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import { TouristicPointType } from 'components/types/ TouristicPoint'
import { EventType } from 'components/types/EventType'

import { Card1, CardText, CardTitle, CategoryText, Cover } from './styles'

// <Link style={{ textDecoration: 'none' }} to={`item/${item.id}`} />

interface ITouristicPointTypeProps {
  point: TouristicPointType | EventType
  children?: React.ReactNode
}
const PointCard: React.FC<ITouristicPointTypeProps> = ({ point }) => (
  <Card1 className="d-flex flex-column h-100" style={{ width: '18rem' }}>
    <Cover
      className="mb-2  img-fluid"
      aspectRatio="1x1"
      style={{
        backgroundImage: `url(${point.capa})`,
      }}
    >
      <div />
    </Cover>

    <Card.Body>
      <CardTitle>{point.nome}</CardTitle>
      <ul className="flex-md-wrap mt-2">
        {point.categorias.map((categorias) => (
          <li className="mt-2 px-1 mb-2" style={{ textDecoration: 'none' }}>
            <CategoryText key={categorias.id}>{categorias.label}</CategoryText>
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
