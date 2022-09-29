import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Outfit;
    src: url("assets/fonts/Outfit-Light.woff") format('woff');
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: Outfit;
    src: url("assets/fonts/Outfit-Medium.woff") format('woff');
    font-style: normal;
    font-weight: 500;
  }
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
  color: ${(props) => props.theme.colors.pureWhite}
}
    body{
      background-color: ${(props) => props.theme.colors.darkBlue} ;
    }
`;

export default GlobalStyles;
