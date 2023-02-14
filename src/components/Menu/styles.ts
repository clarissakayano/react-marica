import styled, { keyframes } from 'styled-components'

interface IMenuContainerProps {
  isVisible: boolean
}

interface IMenuProps {
  menuIsVisible: boolean
}

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`
const enter = keyframes`
    from{
        right: -160px;
    }
    to{
        right: 0;
    }
`
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -160px;
    }
`

export const MenuContainer = styled.section<IMenuContainerProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  background: rgba(17, 18, 17, 0.95);
  color: #ffffff;
  position: fixed;
  width: 300px;
  height: 100vh;
  padding-top: 15px;
  top: 0;
  right: 0;
  left: ${(props) => (props.isVisible ? 0 : -300)}px;
  bottom: 0;
  z-index: 5;
  animation: ${(props) => (props.isVisible ? enter : leave)} 0.5s ease-out;

  > svg {
    position: absolute;
    top: 1rem;
    margin-left: 250px;
  }
  nav ul li {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-bottom: 1px solid #2222;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgb(34, 34, 34);
    padding: 15px;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
  }
`
export const NavMenu = styled.span`
  margin-left: 10px;
`

export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.menuIsVisible ? 1 : 0)};
  visibility: ${(props) => (props.menuIsVisible ? 'visible' : 'hidden')};
  animation: ${(props) => (props.menuIsVisible ? fadeIn : fadeOut)} 0.5s
    ease-out;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-out;
  left: 0;
  z-index: 2;
`
