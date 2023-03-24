import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
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
interface IItemsCarouselBanner {
  image: string
}
export const CarouselItemsBanner = styled.div<IItemsCarouselBanner>`
  background-image: url(${(props) => props.image});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10px;
  padding-bottom: 100%;
  background-position: center center;
  background-attachment: unset;
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
