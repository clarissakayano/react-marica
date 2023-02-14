import styled from 'styled-components'

export const AboutBg = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 5px;
  transform: translateY(-200px);

  h1 {
    display: block;
    font-family: Roboto, sans-serif;
    font-size: 28px;
    font-weight: 700;
  }
`
export const BgImg = styled.div`
  font-family: Roboto, sans-serif;
  background-image: url('https://app-marica-fotos.s3-sa-east-1.amazonaws.com/marica-about.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 80vh;
  position: relative;
  color: black;
  :after {
    content: '';
    background: linear-gradient(
      rgba(250, 250, 250, 0) 0%,
      rgb(245, 245, 245) 100%
    );
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0px;
    right: 0px;
    left: 0px;
  }
`
