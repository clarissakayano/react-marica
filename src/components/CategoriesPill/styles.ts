import styled from 'styled-components'

export const OverFlow = styled.ul`
  overflow-x: scroll;
  flex-wrap: nowrap;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    overflow-x: auto;
  }
`
