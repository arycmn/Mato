import SiderMenu from "../../components/molecules/SiderMenu";
import Register from "../../components/molecules/Register";
import Title from "../../components/atoms/Title";
import {
  Header,
  Border,
  CommentContent,
  Comment,
  TitleContainer,
} from "./style";
import logo from "../../images/mato.png";
import SanCarousel from "sancarousel";
import carousel_pic1 from "../../images/carousel_pic1.jpg";
import carousel_pic2 from "../../images/carousel_pic2.jpg";
import carousel_pic3 from "../../images/carousel_pic3.jpg";
import carousel_pic4 from "../../images/carousel_pic4.jpg";
import  { useHistory } from 'react-router-dom'

const RegisterPage = () => {
  const history = useHistory() 

  if(localStorage.getItem('authToken')){
    history.push('/home')
  }

  const slides = [
    {
      img: carousel_pic1,
      url: "/link-1",
    },
    {
      img: carousel_pic2,
      url: "/link-2",
    },
    {
      img: carousel_pic3,
      url: "/link-3",
    },
    {
      img: carousel_pic4,
      url: "/link-4",
    },
  ];

  return (
    <Header>
      <img src={logo} alt={"logo"}></img>
      <TitleContainer>{"Cadastre - se"}</TitleContainer>

      <Border>
        <SanCarousel
          slides={slides}
          height={"55vh"}
          width={"55vw"}
          slideSize="100%"
          autoPlay={8000}
        />
      </Border>
      <Register />
      <Comment>
        <img
          src={
            "https://images.pexels.com/photos/5528835/pexels-photo-5528835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          alt={"profile"}
        />
        <CommentContent>
        "Foi uma experiência incrível, o lugar era tão bonito e bem preservado, excelente para passar o dia, só não tenho certeza se seria seguro passar a noite lá, pois como era bem preservado pudemos ver alguns animaiszinhos passando por lá, mas para uma experiência diurna é uma excelente pedida."
        </CommentContent>
      </Comment>
    </Header>
  );
};

export default RegisterPage;
