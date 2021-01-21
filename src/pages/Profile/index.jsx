// import { getUserByIdThunk } from "../../store/modules/members";
import { useHistory } from "react-router-dom";
import {
  BoxContainer,
  Avatar,
  Interests,
  Following,
  ChangeInfo,
  Name,
  Text,
} from "./style";

const Profile = () => {
  const history = useHistory();
  const imageProfile =
    "https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/116385004_3229360153818350_4761961545821033836_o.jpg?_nc_cat=110&ccb=2&_nc_sid=a26aad&_nc_ohc=RC1EmB759I0AX_SaA36&_nc_oc=AQnQARlVwkLAspKgx1RFZUiXub0nRzLEjXHupcuL1V2aDz-uyH0MFzP8PsGxVwniz6nJg6w8HHObJP_cJH1p05Re&_nc_ht=scontent.fldb3-1.fna&oh=ffe5749ffb7b16bd81aba99dcc3f01e7&oe=60302D62";

  const handleClickProfileChanges = () => {
    history.push("/profile/settings");
  };

  return (
    <>
      <BoxContainer>
        <Avatar src={imageProfile} alt={"name"} />
        <Name>NOME DO USUARIO</Name>
        <Text> USERNAME</Text>
        <Text>email@email.com</Text>
        <Interests> Interesses </Interests>
        <Text> Seguidores </Text>
        <Following />

        <Text>Seguindo</Text>
        <Following />

        <ChangeInfo onClick={handleClickProfileChanges}>
          Alterar informações
        </ChangeInfo>
      </BoxContainer>
    </>
  );
};

export default Profile;
