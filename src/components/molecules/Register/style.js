import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 100;
  margin: 30px;
  margin-top: 20px;
  padding: 20px;

  p {
    margin-left: 22px;
    margin-top: -8px;
  }

  @media (min-width: 760px) {
    box-sizing: content-box;
    width: 38vw;
    height: 500px;
    margin-top: 120px;

    > form div {
      padding: 10px;
      height: 6vh;
      width: 100%;
      margin: -0px;

    }
    > form div button {
      height: 5vh;
      
    }
    > form {
      height: auto;
      position:relative;
      top:-70px;
    }
  }
  @media (min-width: 1000px) {
    
    box-sizing: content-box;
    width: 30vw;
    height:60vh;
    background-color: rgb(14, 29, 14,0.4);

    > form div {
      padding-left: 10px;
      height: 3vh;
      width: 100%;  
      margin: 10px;
      :nth-child(2){
        margin-top:40px;
      }
    }

    > form {
      width: 80%;  
      margin: 60px;
      margin-left: -20px;
    }

    > form input {
      font-size:20px;
      font-weight:300;
    }
    
    > form div button {
      height: 5vh;
      margin-top: 55px;
    }
  }
`;

export const ButtonContainer = styled.div`

  position:relative;
  top:70px;
  width: 220px;
  display: flex;
  justify-content: center;
  margin:auto;

  @media (min-width: 760px) {
    display: flex;
    align-items: stretch;
  }

  @media (min-width: 1000px){
    position:relative;
    top:300px;
  }
`;

export const Par = styled.p`
  color: red;
`;

export const Login = styled.div`
  font-weight:200;
  width: 150px;
  text-decoration:underline;
  position:relative;
  left:150px;
  width:100px;
  top:-30px;
  text-align:right;
  cursor: pointer;

@media (min-width: 1000px) {
    font-weight:200;
    width: 150px;
    text-decoration:underline;
    position:relative;
    left:30px;
    width:100px;
    top:250px;
    text-align:right;
    cursor: pointer;
  }
`;