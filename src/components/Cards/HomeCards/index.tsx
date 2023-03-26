import { memo, ReactNode } from 'react'

import { Description, HomeCardContainer, Text } from './styles'

interface IHomeCardsProps {
  title?: string
  description?: string
  icon?: ReactNode
}

const HomeCards: React.FC<IHomeCardsProps> = ({ icon, title, description }) => {
  return (
    <HomeCardContainer>
      <div className="d-flex justify-content-center">
        <span>{icon}</span>
      </div>
      <div>
        <Text>{title}</Text>
        <Description className="d-none d-sm-block">{description}</Description>
      </div>
    </HomeCardContainer>
  )
}

export default memo(HomeCards)
