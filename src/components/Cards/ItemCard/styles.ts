import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

export const CardCart = styled.div``

export const Title = styled.p`
  color: #2d677f;
`
interface ICoverProps {
  capa: string
}

export const Cover = styled(Ratio)<ICoverProps>`
background-size: cover
background-position: center center
  background-image: ${({ capa }) => `url(${capa})`},
`
