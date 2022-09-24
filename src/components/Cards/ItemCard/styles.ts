import styled from 'styled-components'

export const CardCart = styled.div``

export const Title = styled.p`
  color: #2d677f;
`
interface ICoverProps {
  capa: string
}

export const Cover = styled.div<ICoverProps>`
  background-image: url ${({ capa }) => capa};
`
