import styled from 'styled-components'

interface ICoverProps {
  capa: string
}
export const Cover = styled.div<ICoverProps>`
  background-image: url ${({ capa }) => capa};
`
