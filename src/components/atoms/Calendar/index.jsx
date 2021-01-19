import { Container, Label, Input } from "./style";

const Calendar = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input name="reservation" type="date" />
    </Container>
  );
};

export default Calendar;
