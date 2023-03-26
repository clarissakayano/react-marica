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
  const pathArray = window.location.pathname.split('/')
  const categoryName = pathArray[1]

  return (
    <ListStyle className="d-flex flex-nowrap flex-md-wrap g-3">
      {!loading &&
        !error &&
        categories.map((category) => (
          <li key={category.id}>
            <LinkStyled
              className="button button-md"
              to={`/${categoryName}/categorias/${category.id}/${strToSlug(
                category.label,
              )}`}
            >
              {category.label}
            </LinkStyled>
          </li>
        ))}
    </ListStyle>
  )
}

export default memo(CategoryPillsComponents)
