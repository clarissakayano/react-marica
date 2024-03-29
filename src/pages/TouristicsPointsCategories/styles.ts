import styled from 'styled-components'

export const CategoriesColor = styled.div`
  display: flex;
  background-color: #6ebd00;
  border-radius: 15px;
  padding: 0px 15px;
  color: blue;
  font-family: Roboto, sans-serif;
  font-size: 18px;
`

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin-top: 10px;
  color: black;
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

  input {
    border-radius: 15px;
    padding: 0px 15px;
  }
`

export const BgColor = styled.div`
  background-color: #f5f5f5;

  span {
    color: black;
  }
  ul {
    margin: 0px 10px 10px 0px;
    padding: 0px 0px 0px 0px;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  input {
    border-radius: 15px;
    padding: 0px 15px;
    border-color: transparent;
  }

  .btnsearch {
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
export const HomeBg = styled.div`
  background-color: rgb(245, 245, 245);
`

export const Categories = styled.div`
  overflow-x: scroll;
`

export const InputBox = styled.div`
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

export const Category = styled.button`
  color: white;
  border: none;
  background-color: rgb(110, 189, 0);
  padding: 0px 20px;
  border-radius: 20px;
  font-size: 18px;
  align-items: center;
  width: fit-content;
  height: 30px;
  flex-wrap: wrap;
  /* unvisited link */
  a:link {
    color: rgb(110, 189, 0);
    text-decoration: none;
  }
  /* visited link */
  a:visited {
    color: rgb(110, 189, 0);
  }
  /* mouse over link */
  a:hover {
    color: white;
  }
  /* selected link */
  a:active {
    color: blue;
  }
`
