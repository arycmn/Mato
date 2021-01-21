import { Container, ButtonContainer, Register } from "./style";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import { password, profile } from "../../../utils/icons";
import { useDispatch } from "react-redux";

import api from "../../../services/axios";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    unregister,
    setValue,
    setError,
    handleSubmit,
    errors,
  } = useForm();

  const handleForm = (data) => {
    console.log(data);

    api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("authToken", res.data.accessToken);

        history.push("/home");
      })
      .catch((err) =>
        setError("password", {
          message: "Senha ou email incorretos",
        })
      );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            placeholderText="Email"
            icon={profile}
            name="email"
            inputRef={register}
          />
        </div>
        <div>
          <TextField
            placeholderText="Senha"
            name="password"
            inputRef={register}
            type="password"
            icon={password}
          />
          <span>{errors.password?.message}</span>
        </div>
        <Register onClick={() => history.push("/register")}>Cadastrar</Register>
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
