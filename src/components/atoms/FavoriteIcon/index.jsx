import { useState } from "react";
import { Container } from "./style";
import { favoriteFull, favoriteEmpty } from "../../../icons";
const FavoriteIcon = () => {
  const [Checked, NewChecked] = useState(false);
  return (
    <Container
      onClick={() => {
        NewChecked(!Checked);
      }}
    >
      {Checked ? (
        <img src={favoriteFull} alt=""></img>
      ) : (
        <img src={favoriteEmpty} alt=""></img>
      )}
    </Container>
  );
};
export default FavoriteIcon;
