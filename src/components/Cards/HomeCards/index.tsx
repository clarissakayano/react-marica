import { memo, ReactNode } from 'react'

import { IconType } from 'react-icons'

import { Description, Text } from './styles'

interface IHomeCardsProps {
  title?: string
  description?: string
  icon?: IconType
}

const HomeCards: React.FC<IHomeCardsProps> = ({ icon, title, description }) => {
  return (
    <>
      {icon}
      <Text>{title}</Text>
      <Description className="d-none d-sm-block">{description}</Description>
    </>
  )
}
export default memo(HomeCards)
