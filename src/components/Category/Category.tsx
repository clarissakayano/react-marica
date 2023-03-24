import { Dispatch, memo, SetStateAction, useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { CategoryType } from 'components/types/CategoryType'

import { CategoriesList, CategoryBtn } from './styled'

interface ICategoryProps {
  categories: CategoryType[]
  setCategory: (category: CategoryType) => void
}

const Category: React.FC<ICategoryProps> = ({ categories, setCategory }) => {
  return (
    <div className="mb-4">
      <CategoriesList>
        {categories?.map((category) => (
          <CategoryBtn
            key={category.id}
            value={category.label}
            type="button"
            onClick={() => setCategory(category)}
          >
            {category.label}
          </CategoryBtn>
        ))}
      </CategoriesList>
    </div>
  )
}
export default memo(Category)
