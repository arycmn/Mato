import { Container, Par, ButtonContainer, Login } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import {
  email,
  name,
  password,
  profile,
  confirmPassword,
} from "../../../utils/icons";

import { useHistory } from "react-router-dom";

import api from "../../../services/axios";

const Register = (props) => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(6, "o nome de usuário deve ter ao menos 6 caracteres")
      .required("campo obrigatório"),
    completeName: yup
      .string()
      .min(4, "Mínimo de 4 dígitos")
      .matches(/[ ]/, "é necessário incluir ao menos um sobrenome")
      .required("campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})((?=.*[a-z]){1}).*$/,
        "Senha deve conter ao menos um caracter especial"
      )
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas diferem"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const { passwordConfirm, ...user } = data;

    const userData = {
      ...user,
      following_id: [],
      followers_id: [],
      interests: {
        activities: [],
        typeLocal: [],
      },
      image_url: "",
    };

    api.post("/register", userData).then((res) => {
      localStorage.setItem("authToken", res.data.accessToken);

      history.push("/user-interests");
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            placeholderText="Nome de usuário"
            inputRef={register}
            name="username"
            icon={profile}
          />
          <Par> {errors.user?.message}</Par>

          <TextField
            placeholderText="Nome Completo"
            inputRef={register}
            name="completeName"
            icon={name}
          />
          <Par> {errors.name?.message}</Par>

          <TextField
            placeholderText="Email"
            inputRef={register}
            name="email"
            icon={email}
          />
          <Par> {errors.email?.message}</Par>

          <TextField
            placeholderText="Senha"
            inputRef={register}
            name="password"
            type="password"
            icon={password}
          />
          <Par> {errors.password?.message}</Par>

          <TextField
            placeholderText="Confirmar senha"
            name="passwordConfirm"
            inputRef={register}
            type="password"
            icon={confirmPassword}
          />
          <Par>{errors.passwordConfirm?.message}</Par>
        </div>
        <ButtonContainer>
          <Button type="submit" round={12}>
            Enviar
          </Button>
        </ButtonContainer>
        <Login onClick={() => history.push("/login")}>Login</Login>
      </form>
    </Container>
  );
};

export default Register;
