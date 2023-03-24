import { memo } from 'react'

import { CategoryType } from 'components/types/CategoryType'

import { StylesPill } from './styles'

interface IPillProps {
  category: CategoryType
  children?: React.ReactNode
  url?: string
  onClick?: () => void
}

const ButtonPill: React.FC<IPillProps> = ({ category, children }) => {
  return (
    <StylesPill>
      {category.label} {children}
    </StylesPill>
  )
}

export default memo(ButtonPill)
