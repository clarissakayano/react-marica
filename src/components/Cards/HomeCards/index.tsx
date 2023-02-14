import { memo } from 'react'

import { Buttom } from 'Header/styles'
import { Card, Container } from 'react-bootstrap'
import { IconType } from 'react-icons'
import { FaUmbrellaBeach } from 'react-icons/fa'

import { Description, Text } from './styles'

interface IHomeCardsProps {
  title?: string
  description?: string
  icon?: IconType
}

const HomeCards: React.FC<IHomeCardsProps> = ({ icon, title, description }) => {
  return (
    <div>
      {icon}
      <Text>{title}</Text>
      <Description className="d-none d-sm-block">{description}</Description>
    </div>
  )
}
export default memo(HomeCards)
