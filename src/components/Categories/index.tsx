import { Dispatch, memo, SetStateAction, useCallback } from 'react'

import { Link } from 'react-router-dom'

import { CategoryType } from 'components/types/CategoryType'

import { strToSlug } from 'helpers'

import { ButtonCategory, CategoriesList, LinkStyled, ListStyle } from './styles'

interface ICategoriesProps {
  categories: CategoryType[]
  loading: boolean
  error: string | null
}

const Categories: React.FC<ICategoriesProps> = ({
  categories,
  loading,
  error,
}) => (
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
            <Link
              className="button button-md"
              to={`categorias/${category.id}/${strToSlug(category.label)}`}
            >
              {category.label}
            </Link>
          </li>
        ),
      )}
  </ListStyle>
)

export default memo(Categories)
