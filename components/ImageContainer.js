import styled from "styled-components";

const ImageContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.figure`
  text-align: center;
  margin-bottom: 35px;
  width: 110%;
  display: inline-block;
  position: relative;
  left: -5%;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }

  span {
    margin-top: 10px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: #666;
    width: 100%;
  }
`;

export default ImageContainer;
