import {
  Container,
  PlacesContainer,
  ActivityContainer,
  Title,
  Button,
} from "./style";
import {
  beach,
  mountain,
  hiking,
  lake,
  forest,
  run,
  swimming,
  fishing,
  board,
  cycling,
} from "../../../utils/icons";
import { useState } from "react";

const Interest = ({ activities, setActivities, typeLocal, setTypeLocal }) => {
  const [beachSelected, setBeach] = useState(false);
  const [mountainSelected, setMountain] = useState(false);
  const [hikingSelected, setHiking] = useState(false);
  const [lakeSelected, setLake] = useState(false);
  const [forestSelected, setForest] = useState(false);
  const [runSelected, setRun] = useState(false);
  const [swimmingSelected, setSwimming] = useState(false);
  const [fishingSelected, setFishing] = useState(false);
  const [boardSelected, setBoard] = useState(false);
  const [cyclingSelected, setCycling] = useState(false);

  console.log(activities);

  const addActivities = (data) => {
    if (activities.includes(data)) {
      const newList = activities.filter((activity) => activity !== data);
      setActivities(newList);
    } else {
      setActivities([...activities, data]);
    }
  };

  const addTypeLocal = (data) => {
    if (typeLocal.includes(data)) {
      const newList = typeLocal.filter((activity) => activity !== data);
      setTypeLocal(newList);
    } else {
      setTypeLocal([...typeLocal, data]);
    }
  };

  return (
    <Container>
      <Title> Lugares favoritos </Title>
      <PlacesContainer>
        <Button
          selected={mountainSelected}
          onClick={() => {
            addActivities("0");
            setMountain(!mountainSelected);
          }}
        >
          <div>
            Montanhas <br />
            <img src={mountain} alt="Button" />
          </div>
        </Button>
        <Button
          selected={lakeSelected}
          onClick={() => {
            addActivities("1");
            setLake(!lakeSelected);
          }}
        >
          <div>
            Rios <br />
            <img src={lake} alt="Button" text={"lake"} />
          </div>
        </Button>
        <Button
          selected={forestSelected}
          onClick={() => {
            addActivities("2");
            setForest(!forestSelected);
          }}
        >
          <div>
            Florestas <br />
            <img src={forest} alt="Button" />
          </div>
        </Button>
        <Button
          selected={beachSelected}
          onClick={() => {
            addActivities("3");
            setBeach(!beachSelected);
          }}
        >
          <div>
            Praias <br />
            <img src={beach} alt="Button" />
          </div>
        </Button>
      </PlacesContainer>

      <Title> Atividades favoritas </Title>
      <ActivityContainer>
        <Button
          selected={hikingSelected}
          onClick={() => {
            addTypeLocal("0");
            setHiking(!hikingSelected);
          }}
        >
          <div>
            Trilhas <br />
            <img src={hiking} alt="Button" />
          </div>
        </Button>
        <Button
          selected={cyclingSelected}
          onClick={() => {
            addTypeLocal("1");
            setCycling(!cyclingSelected);
          }}
        >
          <div>
            Ciclismo <br />
            <img src={cycling} alt="Button" />
          </div>
        </Button>
        <Button
          selected={swimmingSelected}
          onClick={() => {
            addTypeLocal("2");
            setSwimming(!swimmingSelected);
          }}
        >
          <div>
            Natação <br />
            <img src={swimming} alt="Button" />
          </div>
        </Button>
        <Button
          selected={fishingSelected}
          onClick={() => {
            addTypeLocal("3");
            setFishing(!fishingSelected);
          }}
        >
          <div>
            Pesca <br />
            <img src={fishing} alt="Button" />
          </div>
        </Button>
        <Button
          selected={boardSelected}
          onClick={() => {
            addTypeLocal("4");
            setBoard(!boardSelected);
          }}
        >
          <div>
            Surf <br />
            <img src={board} alt="Button" />
          </div>
        </Button>
        <Button
          selected={runSelected}
          onClick={() => {
            addTypeLocal("5");
            setRun(!runSelected);
          }}
        >
          <div>
            Corrida <br />
            <img src={run} alt="Button" />
          </div>
        </Button>
      </ActivityContainer>
    </Container>
  );
};

export default Interest;
