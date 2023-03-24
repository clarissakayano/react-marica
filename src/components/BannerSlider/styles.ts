import styled from 'styled-components'

interface ICoverImgProps {
  capa: string
}
export const SliderImg = styled.div<ICoverImgProps>`
  background-image: ${({ capa }) => `url(${capa})`};
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center center;
`
