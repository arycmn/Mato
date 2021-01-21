import styled from "styled-components";

export const Header = styled.div`
  padding: 10px;
  border: 50px;
  color: white;
  @media (min-width: 1200px) {
    > div:nth-child(2) {
      margin-top: -45px;
    }
  }
  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    padding: 0px;
  }
  > img {
    @media (min-width: 1200px) {
      margin: -28px;
      margin-bottom: 20px;
      margin-left: -130px;
    }
  }
  > img {
    padding-top: 15px;
    padding-bottom: 0px;
    width: 150px;
    height: 150px;
    padding-left: 15vh;

    @media (min-width: 280px) {
      padding-left: 10vh;
    }

    @media (min-width: 360px) {
      padding-left: 15vh;
    }

    @media (min-width: 375px) {
      padding-left: 13vh;
    }

    @media (min-width: 411px) {
      padding-left: 16vh;
    }

    @media (min-width: 540px) {
      padding-left: 25vh;
    }

    @media (min-width: 760px) {
      padding-left: 25vh;
      padding-top: 10vw;
      padding-bottom: 10vw;
      width: 400px;
      height: 400px;
    }

    @media (min-width: 1000px) {
      padding: 0;
      position: absolute;
      top: 30px;
      left: 200px;
      width: 180px;
      height: 180px;
    }
  }
`;

export const Border = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  @media (min-width: 1200px) {
    > div:nth-child(1) {
      padding-top: 10px;
    }
  }
`;

export const Comment = styled.div`
  display: none;
  
  @media (min-width: 1000px) {
    width: 1035px;
    height: 100px;
    background-color: rgb(14, 29, 14, 0.4);
    position: absolute;
    top: 660px;
    left: 100px;

    > img {
      width: 72px;
      height: 72px;
      position: absolute;
      border-radius: 50%;
      margin-top: 14px;
      margin-left: 14px;
    }
  }
`;

export const CommentContent = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }

  @media (min-width: 1000px) {
    font-weight: 200;
    font-size: 14px;
    margin-left: 110px;
    margin-top: 25px;
  }
`;

export const TitleContainer = styled.div`
  font-size: 50px;
  font-family: "Native Spirit";
  text-align: center;

  @media (min-width: 760px) {
    text-align: left;
    width: 50%;
    font-size: 70px;
    color: #f5f5f5;
  }

  @media (min-width: 1280px) {
    font-size: 50px;
    font-family: "Native Spirit";
    text-align: center;

    @media (min-width: 760px) {
      text-align: left;
      width: 50%;
      font-size: 70px;
      color: #f5f5f5;
    }

    @media (min-width: 1280px) {
      position: absolute;
      left: 40%;
      top: 100px;
    }
  }
`;
