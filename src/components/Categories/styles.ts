import styled from 'styled-components'

export const CategoriesList = styled.div`
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    overflow-x: scroll;
  }
  display: flex;
  flex-wrap: nowrap;
`

export const ButtonCategory = styled.button`
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

  &:hover {
    background-color: #7dd700;
    color: #fff;
  }
`

export const LinkStyled = styled.a`
  text-decoration: none;
  color: white;
  flex: flex;
  flex-wrap: nowrap;
  width: fit-content;
  align-items: center;
  justify-content: center;
  background-color: #6ebd00;
  display: flex;
  padding: 5px 20px;
  border-radius: 20px;
  white-space: nowrap;
  :hover {
    color: white;
    background-color: #6ebd00;
  }
`
export const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex: flex;
  li {
    color: white;
    display: inline;
    list-style: none;
    margin: 0px 10px 10px 0px;
  }
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`

export const StyleText = styled.p`
  color: white;
  flex: flex;
  flex-wrap: nowrap;
  padding: 0px;
  margin: 0px;
`

export const StyledA = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 0.5rem;
  :hover {
    color: white;
  }
`
