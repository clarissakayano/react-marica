import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const MapBtn = styled(Button)`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background-color: rgb(45, 103, 127);
  border-radius: 20px;
  border: none;
  white-space: nowrap;
  padding: 0px 20px;
  height: 40px;
  display: flex;

  &:hover,
  a:hover {
    background-color: rgb(45, 103, 127, opacity 0.5);
  }
`
