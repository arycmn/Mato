import SiderMenu from "../../components/molecules/SiderMenu";
import { Container } from "./style.js";
import FollowingList from "../../components/organisms/FollowingList";
import MainContent from "../../components/templates/MainContent";
import Title from "../../components/atoms/Title";
import { getUserListThunk } from "../../store/modules/members/thunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import api from "../../services/axios";

const Following = () => {
  const { profile } = useSelector((store) => store);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${profile.sub}`)
      .then((res) => setFriendsList(!!res.data.following_id || []));
  });

  return (
    <Container>
      <MainContent title="Following">
        <FollowingList data={friendsList} />
      </MainContent>
    </Container>
  );
};

export default Following;
