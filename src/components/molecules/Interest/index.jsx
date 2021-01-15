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

const Interest = () => {
  return (
    <Container>
      <Title> Lugares favoritos </Title>
      <PlacesContainer>
        <Button>
          <div>
            Montanhas <br />
            <img src={mountain} alt="Button" />
          </div>
        </Button>
        <Button>
          <div>
            Rios <br />
            <img src={lake} alt="Button" text={"lake"} />
          </div>
        </Button>
        <Button>
          <div>
            Florestas <br />
            <img src={forest} alt="Button" />
          </div>
        </Button>
        <Button>
          <div>
            Praias <br />
            <img src={beach} alt="Button" />
          </div>
        </Button>
      </PlacesContainer>
      <Title> Atividades favoritas </Title>
      <ActivityContainer>
        <Button>
          <div>
            Trilhas <br />
            <img src={hiking} alt="Button" />
          </div>
        </Button>
        <Button>
          <div>
            Ciclismo <br />
            <img src={cycling} alt="Button" />
          </div>
        </Button>
        <Button>
          <div>
            Natação <br />
            <img src={swimming} alt="Button" />
          </div>
        </Button>
        <Button>
          <div>
            Pesca <br />
            <img src={fishing} alt="Button" />
          </div>
        </Button>
        <Button>
          <div>
            Surf <br />
            <img src={board} alt="Button" />
          </div>
        </Button>
        <Button>
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
