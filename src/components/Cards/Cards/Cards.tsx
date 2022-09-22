import { memo } from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CollectionType } from 'components/types/CategoryTypes'

import { Cover, Title } from './styles'

interface ICollectionTypeProps {
  collection: CollectionType
  children?: React.ReactNode
}

const CategoryCard: React.FC<ICollectionTypeProps> = ({ collection }) => (
  <Card className="w-100">
    <Cover
      style={{
        backgroundImage: `url(${collection.capa})`,
      }}
    >
      <div />
    </Cover>
    <Card.Body>
      <Card.Title>
        <Link
          style={{ textDecoration: 'none' }}
          to={`collection/${collection.id}`}
        >
          <Title key={collection.id}>{collection.nome}</Title>
        </Link>
      </Card.Title>
    </Card.Body>
  </Card>
)

export default memo(CategoryCard)
