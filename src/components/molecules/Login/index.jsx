import { Container, ButtonContainer, Register } from "./style";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import { password, profile } from "../../../utils/icons";
import { useDispatch } from 'react-redux'
import {login} from '../../../store/modules/members/thunk'

const Login = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const {
    register,
    unregister,
    setValue,
    setError,
    handleSubmit,
    errors,
  } = useForm();

  const handleForm = async (data) => {
    await dispatch(login(data, setError));
    if (localStorage.getItem("AuthorizationToken")) {
      history.push("/home");
    }
  };


  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            placeholderText="Usuário"
            icon={profile}
            onChange={(e) => setValue("user")}
          />
        </div>
        <div>
          <TextField
            placeholderText="Senha"
            type="password"
            icon={password}
            onChange={(e) => setValue("password")}
          />
        </div>
        <Register onClick={() => history.push('/register')}>Cadastrar</Register>
        <ButtonContainer>
          <Button type="submit" round={12}>
            Entrar
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default Login;
