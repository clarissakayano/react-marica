import { memo } from 'react'

import ButtonPill from 'components/ButtonPill'
import { CategoryType } from 'components/types/CategoryType'

import { OverFlow } from './styles'

interface ICategoriesProps {
  categories?: CategoryType[]
  url?: string
  setCategory: (category: CategoryType) => void
  children?: React.ReactNode
}

export const CategoriesPill: React.FC<ICategoriesProps> = ({
  categories,
  url,
  setCategory,
}) => {
  return (
    <OverFlow className="d-flex m-0 mb-3 list-unstyled align-items-start">
      {Array.isArray(categories) &&
        categories.length > 0 &&
        categories.map((category) => (
          <li key={category.id} className="text-white">
            <ButtonPill
              category={category}
              url={`/${url}/categorias/${category.id}`}
              onClick={() => setCategory(category)}
            >
              {category.label}
            </ButtonPill>
          </li>
        ))}
    </OverFlow>
  )
}
export default memo(CategoriesPill)
