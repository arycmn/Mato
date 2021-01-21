import styled from "styled-components";

export const Title = styled.div`
  width: 100vw;
  height: 10vh;

  font-size: 32px;
  font-family: "Poppins", sans-serif;
  color: #f5f5f5;
  margin: 0 0 0 25px;

  > div {
    height: auto;
    width: auto;
  }
  > div img {
    width: 30px;
    height: 30px;
    margin-right: 52px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(min-width: 1200px){
    >div {
      position: relative;
      left:400px;
    }

    > div img {
      margin-left:-540px;
    }
    
  }
`;

export const Container = styled.div`
  position: absolute;
  left: -2px;
  > div div:nth-child(4) {
    margin: 40px;
    margin-bottom: 40px;
  }

  > div button {
    margin-top:-200px;
  }
`;
export const CalendarContainer = styled.div`
  color: #f5f5f5;
  font-weight:200;
  font-family: "Poppins", sans-serif;
  > div:nth-child(1) {
    padding-top: 10px;
    padding-bottom: 10px;
    position:relative;
    top:-360px;
    left:200px;
    width:320px;
    
    
  }
  > div:nth-child(2) {
    padding: 10px 0;
    position:relative;
    top:-360px;
    left:200px;
    width:320px;
  }
`;
export const LearnMoreText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  width: 80vw;
  word-break: break-word;
  


  @media(min-width: 1200px){
    display: flex;
    position:relative;
    flex-flow: column;
    color: #f5f5f5;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-weight:200;
    font-size:26px;
    
    left:560px;
    top:-370px;
    word-break: break-word;
    
    > div{
    position:relative;
    top:160px;
    left:-520px;
    font-size:18px;
    width:800px;
    
    }
  }
`;
export const BarDays = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > .active {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;

    width: 100px;
    height: 60%;

    background-color: #2c482f;
  }
  width: 85vw;
  height: 5vh;

  background-color: rgba(58, 97, 62, 0.7);
  border-radius: 10px;
  @media(min-width: 1200px){
    display: none;
  }

`;

export const PicturePosition = styled.div`

  @media(min-width: 1200px){
    > div img {
      position: relative;
      left:-140px;
      top:15px;
      width: 500px;
      height: 370px;
      margin-left: -210px;
      padding-right: 55px;
    }
}
`;
