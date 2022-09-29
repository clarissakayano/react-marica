import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

export const CardCover = styled.div``
interface ICoverProps {
  capa: string
}

export const Card = styled.div``

interface ICoverProps {
  coverimage: string
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  margin-top: 0px;
  padding: 0%;
`
