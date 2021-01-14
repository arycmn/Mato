import { Container, ButtonContainer, Title, Button } from "./style";
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
      <ButtonContainer>
        <Button>
          <div>
            Montanhas <br />
            <img src={mountain} alt="Button" />
          </div>
        </Button>
        <Button>
          <div>
            Lagos e Rios <br />
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
      </ButtonContainer>
      <Title> Atividades favoritas </Title>
      <ButtonContainer>
        <Button type="icon" icon={hiking}></Button>
        <Button type="icon" icon={run}></Button>
        <Button type="icon" icon={swimming}></Button>
        <Button type="icon" icon={fishing} />
        <Button type="icon" icon={board} />
        <Button type="icon" icon={cycling} />
      </ButtonContainer>
    </Container>
  );
};

export default Interest;
