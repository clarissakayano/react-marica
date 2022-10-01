import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

export const Card1 = styled.div`
  display: inline-block;
  background-color: white;
  margin: 10px;
  border-radius: 5px;
  justify-content: center;
  ul {
    display: flex;
    padding-inline-start: 10px;
    font-weight: 300;
    height: 20px;
  }

  li {
    list-style-type: none;
  }
`

interface ICoverProps {
  coverimage: string
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
  margin-top: 0px;
  padding: 0%;
  height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const CardTitle = styled.h2`
  color: rgb(45 103 127);
  font-weight 700;
  font-size: 18px;
  font-family: Roboto, sans-serif; ;
  padding-left: 15px;
`

export const CategoryText = styled.div`
  display: flex;
  background-color: rgb(238 238 238);
  border-radius: 15px;
  color: #666666;
  padding: 0px 20px;
  height: 20px;
  font-size: 12px;
`

export const CardText = styled.p`
  color: #6c757d;
  font-size: 16px;
  padding-left: 15px;
  font-weight: 300;
`
