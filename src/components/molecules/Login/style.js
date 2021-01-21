import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 100;
  margin: 30px;
  padding: 20px;

  @media (min-width: 760px) {
    box-sizing: content-box;
    width: 38vw;

    > form div {
      padding: 10px;
      height: 6vh;
      width: 100%;
      margin: 10px;
    }
    
    > form div button {
      height: 5vh;
    }
  }

  @media (min-width: 1000px) {
    
    box-sizing: content-box;
    width: 30vw;
    height:51vh;
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
      margin-top: 45px;
    }
  }
`;

export const ButtonContainer = styled.div`

  display: flex;
  justify-content: center;
  width: 220px;
  margin:auto; 
  margin-top:30px; 

  @media (min-width: 280px) {
    width: 150px;
  }
`;

export const Par = styled.p`
  color: red;
`;

export const Register = styled.div`
  font-weight:200;
  width: 150px;
  text-decoration:underline;
  position:relative;
  left:150px;
  width:100px;
  top:20px;
  text-align:right;
  cursor: pointer;

@media (min-width: 1000px) {
    font-weight:200;
    width: 150px;
    text-decoration:underline;
    position:relative;
    left:30px;
    width:100px;
    top:20px;
    text-align:right;
    cursor: pointer;
  }
`;
