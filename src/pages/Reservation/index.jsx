import SiderMenu from "../../components/molecules/SiderMenu";
import FavoriteIcon from "../../components/atoms/FavoriteIcon";
import Picture from "../../components/atoms/Picture";
import Button from "../../components/atoms/Button";
import MainContent from "../../components/templates/MainContent";
import {
  Title,
  Container,
  LearnMoreText,
  BarDays,
  CalendarContainer,
  PicturePosition,
} from "./style";
import Calendar from "../../components/atoms/Calendar";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FooterMenu from "../../components/molecules/FooterMenu";
import { getCampsiteByCampsiteId } from "../../store/modules/camps/thunk";

const Reservation = () => {
  const dispatch = useDispatch();
  const { campsList } = useSelector((store) => store);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCampsiteByCampsiteId(id));
  }, []);

  const [StateActive, setActive] = useState(0);
  const [LearnMore, SetLearnMore] = useState(false);
  const history = useHistory();

  return (
    <>
      <Container>
        <Title>
          <div>Reserve uma data</div> <FavoriteIcon />
        </Title>
        <MainContent>
          <PicturePosition>
            <Picture
              alt={"Location Picture"}
              src={campsList.image_url}
              pictureType={"location"}
              height={"220px"}
              width={"300px"}
            ></Picture>
          </PicturePosition>
          <LearnMoreText>Quanto tempo você deseja ficar? </LearnMoreText>
          <BarDays>
            <div
              onClick={() => setActive(0)}
              className={StateActive === 0 ? "active" : ""}
            >
              1 - 2 days
            </div>
            <div
              onClick={() => setActive(1)}
              className={StateActive === 1 ? "active" : ""}
            >
              3 - 5 days
            </div>
            <div
              onClick={() => setActive(2)}
              className={StateActive === 2 ? "active" : ""}
            >
              6 - 10 days
            </div>
          </BarDays>
          <CalendarContainer>
            <Calendar label="Data de InÍcio"></Calendar>
            <Calendar label="Data Final"></Calendar>
          </CalendarContainer>

          {LearnMore ? (
            <LearnMoreText>
              <div>{campsList.description}</div>
              <div onClick={() => SetLearnMore(!LearnMore)}>Esconder</div>
            </LearnMoreText>
          ) : (
            <LearnMoreText>
              <div>
                {campsList.description
                  ? campsList.description.split("").splice(0, 35).join("")
                  : "Loading"}
                ...
              </div>
              <div onClick={() => SetLearnMore(!LearnMore)}>Saiba mais</div>
            </LearnMoreText>
          )}

          <Button
            width={"267px"}
            height={"52px"}
            round
            onClick={() => history.push("/login")}
          >
            Confirmar reserva
          </Button>
        </MainContent>
      </Container>
      <SiderMenu />
    </>
  );
};
export default Reservation;
