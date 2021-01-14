import { createGlobalStyle } from "styled-components";
import Background from "../images/Background.webp";

export default createGlobalStyle`
body {
  background-image: url(${Background});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: -1;
}

`;
