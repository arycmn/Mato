import { useState } from "react";
import { favoriteFull } from "../../../icons";
import { favoriteEmpty } from "../../../icons";

const FavoriteIcon = () => {
  const [Checked, NewChecked] = useState(false);
  return (
    <div
      onClick={() => {
        NewChecked(!Checked);
      }}
    >
      {Checked ? (
        <img src={favoriteFull}></img>
      ) : (
        <img src={favoriteEmpty}></img>
      )}
    </div>
  );
};
export default FavoriteIcon;
