import styled from 'styled-components'

export const CardCover = styled.div``
interface ICoverProps {
  capa: string
}

export const Cover = styled.div<ICoverProps>`
  background-image: url ${({ capa }) => capa};
`
