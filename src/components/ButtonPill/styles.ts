import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StylesPill = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #6ebd00;
  text-decoration: none;
  border-radius: 20px;
  width: fit-content;
  height: 30px;
  font-size: 18px;
  padding: 0px 20px;
  white-space: nowrap;
  margin: 0 10px 10px 0;
  border: none;
  color: #fff;

  &:hover {
    background-color: #7dd700;
    color: #fff;
  }
`
export const CategoriesColor = styled.div`
  display: flex;
  background-color: #6ebd00;
  border-radius: 15px;
  padding: 0px 15px;
  color: white;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  border-color: none;
`
