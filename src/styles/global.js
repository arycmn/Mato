import { createGlobalStyle } from "styled-components";
import Background from "../images/Background.webp";

export default createGlobalStyle`
<<<<<<< HEAD
  body {
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    z-index: -1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
=======
body {
  background-image: url(${Background});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: -1;
  font-family: 'Poppins', sans-serif;
}
>>>>>>> 686ff44cff3e8ecce41efbf8d2088406ef3d04e3

  div#bg-filter {
    background: rgba(36, 57, 40, 0.42);
    width: 100%;
    height: 100vh;
  }
`;
