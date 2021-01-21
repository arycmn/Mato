import { Container } from "./style";
import {
  run,
  cycling,
  swimming,
  fishing,
  hiking,
  board,
} from "../../../utils/icons";
import LocalActivity from "../../atoms/LocalActivity";

const LocalActivityList = ({ activityID }) => {
  const reference = [
    { name: "Natação", id: 0, icon: swimming },
    { name: "Corrida", id: 1, icon: run },
    { name: "Ciclismo", id: 2, icon: cycling },
    { name: "Pesca", id: 3, icon: fishing },
    { name: "Trilha", id: 4, icon: hiking },
    { name: "Surf", id: 5, icon: board },
  ];

  return (
    <Container>
      {activityID.map((activity, index) => (
        <LocalActivity
          key={index}
          icon={reference[activity].icon}
          title={reference[activity].name}
        />
      ))}
    </Container>
  );
};

export default LocalActivityList;
