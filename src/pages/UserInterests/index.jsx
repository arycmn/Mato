import { useEffect, useState } from "react";
import SiderMenu from "../../components/molecules/SiderMenu";
import Interests from "../../components/molecules/Interest";
import Title from "../../components/atoms/Title";
import Texts from "../../components/atoms/Texts";
import { Header, InterestsContainer, ButtonContainer } from "./style";
import logo from "../../images/logo Mato.png";
import Button from "../../components/atoms/Button";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import api from "../../services/axios";

const UserInterests = () => {
  const history = useHistory();

  const [activities, setActivities] = useState([]);
  const [typeLocal, setTypeLocal] = useState([]);
  let token = localStorage.getItem("authToken");
  let decoded = jwt_decode(token);

  useEffect(() => {
    api.get(`/users/${decoded.sub}`).then((res) => {
      setActivities(res.data.interests.activities);
      setTypeLocal(res.data.interests.typeLocal);
    });
  }, []);

  const sendToApi = () => {
    const data = {
      interests: {
        activities,
        typeLocal,
      },
    };

    api
      .patch(`/users/${decoded.sub}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <Header>
        <img src={logo} alt="logo"></img>

        <Title text={"Interesses"} />
        <Texts text="Nos conte um pouco mais sobre seus interesses, quais são as atividades que você gosta e os lugares que você curte" />

        <InterestsContainer>
          <Interests
            activities={activities}
            setActivities={setActivities}
            typeLocal={typeLocal}
            setTypeLocal={setTypeLocal}
          />
        </InterestsContainer>
        <ButtonContainer>
          <Button
            round
            onClick={() => {
              sendToApi();
              history.push("/home");
            }}
          >
            Continue
          </Button>
        </ButtonContainer>
      </Header>
      <SiderMenu />
    </>
  );
};
export default UserInterests;
