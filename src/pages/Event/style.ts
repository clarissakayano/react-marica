import styled from 'styled-components'

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
export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
`
export const SubTitle = styled.h2`
  font-size: 16px;
  font-family: Roboto, sans-serif;
  padding-left: 33px;
`

export const BgPage = styled.main`
  background-color: #eee;
`

export const ImageCarousel = styled.img`
  max-height: 340px;
`

export const CategoryStyled = styled.div`
  background-color: #6ebd00;
  color: #fff;
  font-size: 22px;
  margin: 8px 14px 0 0px;
  padding: 0 20px 4px 20px;
  border-radius: 18px;

  &:hover {
    background-color: #7dd700;
  }

  /* @media (max-width: 767px) {
    overflow-x: scroll;
  } */
`

export const ImgApp = styled.img`
  max-width: 200px;
`

export const IconStyle = styled.span`
  color: #6ebd00;
`

export const CoverBanner = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-size: cover;
  background-position: center center;
`
