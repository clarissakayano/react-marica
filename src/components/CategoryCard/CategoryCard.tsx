import { memo } from 'react'

import { Card } from 'react-bootstrap'

import { CollectionType } from 'components/types/CollectionType'

import { Cover } from './styles'

interface IColllectionTypeProps {
  collection: CollectionType
}
const CategoryCard: React.FC<IColllectionTypeProps> = ({ collection }) => (
  <Card>
    <Cover
      style={{
        backgroundImage: `url(${collection.capa})`,
      }}
    >
      <div />
    </Cover>
    <div>
      <div>{collection.nome}</div>
      <div>
        {collection.endereco.map((endereco) => (
          <p key={endereco.id}>{endereco.label}</p>
        ))}
      </div>
    </div>
  </Card>
)
export default memo(CategoryCard)
