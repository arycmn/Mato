import Register from "../../components/molecules/Register";
import Title from "../../components/atoms/Title";
import { Header,Border,CommentContent,Comment,TitleContainer } from "./style";
import logo from "../../images/logo Mato.png";
import SanCarousel from 'sancarousel';
import carousel_pic1 from '../../images/carousel_pic1.jpg'
import carousel_pic2 from '../../images/carousel_pic2.jpg'
import carousel_pic3 from '../../images/carousel_pic3.jpg'
import carousel_pic4 from '../../images/carousel_pic4.jpg'

const RegisterPage = () => {
  
  
  const slides = [
    {
      img: carousel_pic1,
      url: '/link-1'
    },
    {
      img: carousel_pic2,
      url: '/link-2'
    },
    {
      img: carousel_pic3,
      url: '/link-3'
    },
    {
      img: carousel_pic4,
      url: '/link-4'
    }
  ];

  return (
    <Header>
      <img src={logo} alt={"logo"}></img>
      <TitleContainer>{"Cadastre - se"}</TitleContainer>
      
      <Border>
        <SanCarousel 
          slides={slides}
          height={'55vh'}
          width={'55vw'}
          slideSize="100%"
          autoPlay={8000}
          spaceBetweenSlides="10px"
         />
      </Border>
      <Register />
      <Comment>
          <img src={'https://images.pexels.com/photos/5528835/pexels-photo-5528835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt={'profile'}/>
        <CommentContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae qui assumenda aspernatur ut tenetur saepe doloribus similique nobis corrupti nostrum, quisquam at commodi minima dicta repellendus voluptates dignissimos aliquid!</CommentContent>
      </Comment>
    </Header>
  );
};

export default RegisterPage;
