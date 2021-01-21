import { Container } from "./style.js";
import FollowingList from "../../components/organisms/FollowingList";
import MainContent from "../../components/templates/MainContent";
import Title from "../../components/atoms/Title";
import { useEffect } from 'react'
import { getUserListThunk } from '../../store/modules/members/thunk'
import { useDispatch,useSelector } from 'react-redux'

const Following = () => {
  const width = window.innerWidth;

  const data = [];

  const dispatch = useDispatch();
  const { memberList } = useSelector((store) => store);
  
  useEffect(() => {
    dispatch(getUserListThunk());
  }, []);

  return (
    <Container>
      <MainContent title="Following">
        <FollowingList data={memberList} />
      </MainContent>
    </Container>
  );
};

export default Following;
