import SiderMenu from "../../components/molecules/SiderMenu";
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

import { useEffect, useState } from "react";
import api from "../../services/axios";
import { useSelector } from "react-redux";

const Profile = () => {
  const imageProfile =
    "https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/116385004_3229360153818350_4761961545821033836_o.jpg?_nc_cat=110&ccb=2&_nc_sid=a26aad&_nc_ohc=RC1EmB759I0AX_SaA36&_nc_oc=AQnQARlVwkLAspKgx1RFZUiXub0nRzLEjXHupcuL1V2aDz-uyH0MFzP8PsGxVwniz6nJg6w8HHObJP_cJH1p05Re&_nc_ht=scontent.fldb3-1.fna&oh=ffe5749ffb7b16bd81aba99dcc3f01e7&oe=60302D62";

  const profileFromThunk = useSelector((store) => store.profile);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    api
      .get(`/users/${profileFromThunk.sub}`)
      .then((res) => setProfile(res.data));
  });

  return (
    <>
      <BoxContainer>
        <Avatar src={profile?.image_url || imageProfile} alt={"name"} />
        <Name>{profile.completeName}</Name>
        <Text>{profile.username}</Text>
        <Text>{profile.email}</Text>
        <Text> Seguidores: {profile.followers_id?.length} </Text>
        <Following />

        <Text>Seguindo: {profile.following_id?.length}</Text>
        <Following />
      </BoxContainer>
      <SiderMenu />
    </>
  );
};

export default Profile;
