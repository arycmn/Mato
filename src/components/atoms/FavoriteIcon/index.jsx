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
        <img src={favoriteFull}></img>
      ) : (
        <img src={favoriteEmpty}></img>
      )}
    </Container>
  );
};
export default FavoriteIcon;
