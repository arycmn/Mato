import SiderMenu from "../../components/molecules/SiderMenu";
import Title from "../../components/atoms/Title";
import Backpack from "../../utils/backpack.svg";
import MainContent from "../../components/templates/MainContent";
import { Container, Recomended, ImagemContainer } from "./style";
import { useHistory } from "react-router-dom";
const Reservation = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <MainContent title={"Welcome"}>
          <div className="Link" onClick={() => history.push(`/news`)}>
            <img alt={"Backpack-Icon"} src={Backpack}></img>
            <div>News</div>
          </div>
          <div className="Link" onClick={() => history.push(`/your-journey`)}>
            <img alt={"Backpack-Icon"} src={Backpack}></img>
            <div>New Journey</div>
          </div>
          <div onClick={() => history.push("/following")}>Following</div>
          <Recomended>
            <div>Recomended Places</div>
          </Recomended>
          <ImagemContainer>
            <div onClick={() => history.push(`/location/1`)}>
              <img
                alt="Red Forest"
                src="https://images.pexels.com/photos/3551207/pexels-photo-3551207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              ></img>
              <div>Red Forest</div>
            </div>
            <div onClick={() => history.push(`/location/2`)}>
              <img
                alt="Farol"
                src="https://images.pexels.com/photos/655018/pexels-photo-655018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              ></img>
              <div>Farol</div>
            </div>
            <div onClick={() => history.push(`/location/3`)}>
              <img
                alt="Green trail"
                src="https://images.pexels.com/photos/5846615/pexels-photo-5846615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              ></img>
              <div>Green trail</div>
            </div>
            <div onClick={() => history.push(`/location/4`)}>
              <img
                alt="Waterfall"
                src="https://i.picsum.photos/id/1039/300/300.jpg?hmac=im4VlwAVlc_D5YrlPUIyevVkivYNpLovBLVBSf4WmSw"
              ></img>
              <div>Waterfall</div>
            </div>
          </ImagemContainer>
        </MainContent>
      </Container>
      <SiderMenu />
    </>
  );
};
export default Reservation;
