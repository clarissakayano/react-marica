import styled from 'styled-components'

export const CategoriesColor = styled.div`
  display: flex;
  background-color: #6ebd00;
  border-radius: 15px;
  padding: 0px 15px;
  color: white;
  font-family: Roboto, sans-serif;
  font-size: 18px;
`

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin-top: 10px;
`

export const Inp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  font-size: 18px;
  color: rgb(51, 51, 51);
  textarea:focus,
  input:focus {
    outline: none;
  }
`

export const BgColor = styled.div`
  background-color: #f5f5f5;

  ul {
    margin: 0px 10px 10px 0px;
    padding: 0px 0px 0px 0px;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: #333333;
  }

  input {
    border-radius: 15px;
    padding: 0px 15px;
    border-color: transparent;
  }

  button {
    border-radius: 20px;
    background-color: transparent;
    border: none;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
