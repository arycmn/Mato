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
    { name: "Run", id: 0, icon: run },
    { name: "Cycling", id: 1, icon: cycling },
    { name: "Swimming", id: 2, icon: swimming },
    { name: "Fishing", id: 3, icon: fishing },
    { name: "Hiking", id: 4, icon: hiking },
    { name: "Board", id: 5, icon: board },
  ];

  return (
    <Container>
      {activityID.map((activity) => (
        <LocalActivity
          icon={reference[activity].icon}
          title={reference[activity].name}
        />
      ))}
    </Container>
  );
};

export default LocalActivityList;
