import Title from "../../components/atoms/Title";
import MainContent from "../../components/templates/MainContent";
import { Container, Recomended, ImagemContainer } from "./style";
import { useHistory } from "react-router-dom";
import { getProfileThunk } from "../../store/modules/profile/thunk";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

const Reservation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("authToken");
    let decoded = jwt_decode(token);

    dispatch(getProfileThunk(decoded));
  });

  return (
    <Container>
<<<<<<< HEAD
      <MainContent>
        <Title text={"Bem-vindo ao Mato!"} />

=======
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
>>>>>>> 18491a8362f2ad6c61270447ab3d5e43cf987746
        <Recomended>
          Selecionamos alguns lugares que você pode gostar
        </Recomended>
        <ImagemContainer>
          <div onClick={() => history.push(`/location/1`)}>
            <img
              alt="Florestas"
              src="https://images.pexels.com/photos/3551207/pexels-photo-3551207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ></img>
            <div>Florestas</div>
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
            <div>Trilhas</div>
          </div>
          <div onClick={() => history.push(`/location/4`)}>
            <img
              alt="Waterfall"
              src="https://i.picsum.photos/id/1039/300/300.jpg?hmac=im4VlwAVlc_D5YrlPUIyevVkivYNpLovBLVBSf4WmSw"
            ></img>
            <div>Cachoeiras</div>
          </div>
        </ImagemContainer>
        <Recomended>Explore lugares perto de você</Recomended>
        <ImagemContainer>
          <div className="Link" onClick={() => history.push(`/your-journey`)}>
            <img
              alt="Florestas"
              src="https://d1nglqw9e0mrau.cloudfront.net/assets/images/thumbs/erangel-ee673d73.jpg"
            ></img>
            <div>Mapa</div>
          </div>
        </ImagemContainer>
      </MainContent>
    </Container>
  );
};
export default Reservation;
