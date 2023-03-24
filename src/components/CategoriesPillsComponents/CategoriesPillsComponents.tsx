import { memo } from 'react'

import { CategoryType } from 'components/types/CategoryType'

import { strToSlug } from 'helpers'

import { LinkStyled, ListStyle } from './styles'

interface ICategoryPillsProps {
  categories: CategoryType[]
  loading: boolean
  error: string | null
}

const CategoryPillsComponents: React.FC<ICategoryPillsProps> = ({
  loading,
  error,
  categories,
}) => {
  return (
    <ListStyle className="d-flex flex-nowrap flex-md-wrap g-3">
      {!loading &&
        !error &&
        categories.map(
          (category: {
            id: number
            label: string
            count?: number | undefined
          }) => (
            <li key={category.id}>
              <LinkStyled
                className="button button-md"
                to={`/pontos-turisticos/categorias/${category.id}/${strToSlug(
                  category.label,
                )}`}
              >
                {category.label}
              </LinkStyled>
            </li>
          ),
        )}
    </ListStyle>
  )
}

export default memo(CategoryPillsComponents)
