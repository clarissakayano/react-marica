import { memo } from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CollectionType } from 'components/types/CategoryTypes'

import { Cover, Title } from './styles'

interface ICollectionTypeProps {
  item: CollectionType
  children?: React.ReactNode
}

const ItemCard: React.FC<ICollectionTypeProps> = ({ item }) => (
  <Card className="w-100">
    <Cover
      style={{
        backgroundImage: `url(${item.capa})`,
      }}
    >
      <div />
    </Cover>
    <Card.Body>
      <Card.Title>
        <Link style={{ textDecoration: 'none' }} to={`item/${item.id}`}>
          <Title key={item.id}>{item.nome}</Title>
        </Link>
      </Card.Title>
    </Card.Body>
  </Card>
)

export default memo(ItemCard)
