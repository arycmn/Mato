import { Container, Label, Input } from "./style";

const Calendar = () => {
  return (
    <Container>
      <Label>Reserve este local</Label>
      <Input name="reservation" type="date" />
    </Container>
  );
};

export default Calendar;
