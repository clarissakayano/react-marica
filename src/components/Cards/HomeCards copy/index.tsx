import { memo } from 'react'

import { Buttom } from 'Header/styles'
import { Card, Container } from 'react-bootstrap'
import { FaUmbrellaBeach } from 'react-icons/fa'

interface IHomeCardsProps {
  image: string
  description: string
  title: string
}
const HomeCards: React.FC<IHomeCardsProps> = ({
  image,
  title,
  description,
}) => (
  <>
    {image}
    {title}
    {description}
  </>
)
export default memo(HomeCards)
