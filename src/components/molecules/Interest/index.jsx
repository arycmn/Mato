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

const Interest = () => {
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

  return (
    <Container>
      <Title> Lugares favoritos </Title>
      <PlacesContainer>
        <Button
          selected={mountainSelected}
          onClick={() => setMountain(!mountainSelected)}
        >
          <div>
            Montanhas <br />
            <img src={mountain} alt="Button" />
          </div>
        </Button>
        <Button selected={lakeSelected} onClick={() => setLake(!lakeSelected)}>
          <div>
            Rios <br />
            <img src={lake} alt="Button" text={"lake"} />
          </div>
        </Button>
        <Button
          selected={forestSelected}
          onClick={() => setForest(!forestSelected)}
        >
          <div>
            Florestas <br />
            <img src={forest} alt="Button" />
          </div>
        </Button>
        <Button
          selected={beachSelected}
          onClick={() => setBeach(!beachSelected)}
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
          onClick={() => setHiking(!hikingSelected)}
        >
          <div>
            Trilhas <br />
            <img src={hiking} alt="Button" />
          </div>
        </Button>
        <Button
          selected={cyclingSelected}
          onClick={() => setCycling(!cyclingSelected)}
        >
          <div>
            Ciclismo <br />
            <img src={cycling} alt="Button" />
          </div>
        </Button>
        <Button
          selected={swimmingSelected}
          onClick={() => setSwimming(!swimmingSelected)}
        >
          <div>
            Natação <br />
            <img src={swimming} alt="Button" />
          </div>
        </Button>
        <Button
          selected={fishingSelected}
          onClick={() => setFishing(!fishingSelected)}
        >
          <div>
            Pesca <br />
            <img src={fishing} alt="Button" />
          </div>
        </Button>
        <Button
          selected={boardSelected}
          onClick={() => setBoard(!boardSelected)}
        >
          <div>
            Surf <br />
            <img src={board} alt="Button" />
          </div>
        </Button>
        <Button selected={runSelected} onClick={() => setRun(!runSelected)}>
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
