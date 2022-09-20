import { memo } from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CollectionType } from 'components/types/CategoryTypes'

import { Cover, Title } from './styles'

interface ICollectionTypeProps {
  collection: CollectionType
}

const CategoryCard: React.FC<ICollectionTypeProps> = ({ collection }) => (
  <Card className="w-100">
    <Cover
      aspectRatio="1x1"
      style={{
        backgroundImage: `url(${address.capa})`,
      }}
    >
      <div />
    </Cover>
    <Card.Body>
      <Card.Title>
        <Link style={{ textDecoration: 'none' }} to={`address/${address.id}`}>
          <Title key={endereco.id} />
        </Link>
      </Card.Title>
    </Card.Body>
  </Card>
)

export default memo(AddressCard)
