import styled from 'styled-components'

export const Title = styled.h2`
  color: black;
  font-size: 22px;
  font-weight: 500;
  color: rgb(51, 51, 51);
`

export const CategoriesColor = styled.button`
  display: inline-block;
  background-color: #6ebd00;
  border-radius: 15px;
  padding: 0px 15px;
  color: white;
  font-family: Roboto, sans-serif;
  border-color: transparent;
`
export const TextDias = styled.span`
  font-weight: 700;
`
interface ICoverImgProps {
  capa: string
}
export const Img = styled.div<ICoverImgProps>`
  background-image: ${({ capa }) => `url(${capa})`};
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center center;
`

export const RestaurantContainer = styled.div`
  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }
`
