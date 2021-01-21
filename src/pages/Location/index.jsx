import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCampsiteByCampsiteId } from "../../store/modules/camps/thunk";
import FavoriteIcon from "../../components/atoms/FavoriteIcon";
import Picture from "../../components/atoms/Picture";
import Button from "../../components/atoms/Button";
import MainContent from "../../components/templates/MainContent";
import LocalActivityList from "../../components/molecules/LocalActivityList";
import { Title, LocalActivies, Container, LearnMoreText } from "./style";

const Location = () => {
  const dispatch = useDispatch();
  const { campsList } = useSelector((store) => store);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCampsiteByCampsiteId(id));
  }, []);
  const [LearnMore, SetLearnMore] = useState(false);

  console.log(campsList);
  return (
    <Container>
      <Title>
        <div>Location</div>
        <FavoriteIcon />
      </Title>
      <MainContent text={null}>
        <Picture
          alt={"Location Picture"}
          src={campsList.image_url}
          picturetype={"location"}
          height={"220px"}
          width={"300px"}
        ></Picture>
        {LearnMore ? (
          <LearnMoreText>
            <div>{campsList.description}</div>
            <div onClick={() => SetLearnMore(!LearnMore)}>Hide</div>
          </LearnMoreText>
        ) : (
          <LearnMoreText>
            <div>
              {campsList.description
                ? campsList.description.split("").splice(0, 35).join("")
                : "Loading"}
              ...
            </div>
            <div onClick={() => SetLearnMore(!LearnMore)}>LearnMore</div>
          </LearnMoreText>
        )}
        <LocalActivies>Local Activies</LocalActivies>
        <LocalActivityList
          activityID={campsList.activities_id ? campsList.activities_id : []}
        ></LocalActivityList>
        <Button width={"267px"} height={"52px"} round>
          Continue
        </Button>
      </MainContent>
    </Container>
  );
};
export default Location;
