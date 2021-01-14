import Button from "../../atoms/Button";
import { Container, ButtonContainer, Title } from "./style";

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
} from "../../../icons";

const Interest = () => {
  return (
    <Container>
      <Title> Lugares </Title>
      <ButtonContainer>
        <Button type="icon" icon={mountain} round={0}></Button>
        <Button type="icon" icon={lake} round={0}></Button>
        <Button type="icon" icon={forest} round={0}></Button>
        <Button type="icon" icon={beach} round={0}></Button>
      </ButtonContainer>
      <Title> Atividades</Title>
      <ButtonContainer>
        <Button type="icon" icon={hiking} round={0}></Button>
        <Button type="icon" icon={run} round={0}></Button>
        <Button type="icon" icon={swimming} round={0}></Button>
        <Button type="icon" icon={fishing} round={0} />
        <Button type="icon" icon={board} round={0} />
      </ButtonContainer>
    </Container>
  );
};

export default Interest;
