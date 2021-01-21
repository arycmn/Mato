// import { useState } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { schema } from "./validations";
// import { api } from "../../services/API";

const ProfileSettings = () => {
  //   const [profileChange, setProfileChange] = useState(profile);
  //   const history = useHistory();
  //   const dispatch = useDispatch();
  //   const { register, handleSubmit, errors, setError } = useForm({
  //     resolver: yupResolver(schema),
  //   });

  //   const defaultAvatar =
  //     "https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/116385004_3229360153818350_4761961545821033836_o.jpg?_nc_cat=110&ccb=2&_nc_sid=a26aad&_nc_ohc=RC1EmB759I0AX_SaA36&_nc_oc=AQnQARlVwkLAspKgx1RFZUiXub0nRzLEjXHupcuL1V2aDz-uyH0MFzP8PsGxVwniz6nJg6w8HHObJP_cJH1p05Re&_nc_ht=scontent.fldb3-1.fna&oh=ffe5749ffb7b16bd81aba99dcc3f01e7&oe=60302D62";

  //   const handleAvatarChange = (e) => {
  //     const data = new FormData();
  //     data.append("image", e.target.files[0]);
  //     api
  //       .patch("/users/image_url", data, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         setProfileChange({
  //           ...profileChange,
  //           image_url: response.data.image_url,
  //         });
  //         dispatch(getUserByIdThunk(response.data));
  //         message.success("Imagem atualizada");

  //         setError("image_url", {
  //           message: "",
  //         });
  //       })
  //       .catch((err) =>
  //         setError("image_url", {
  //           message: "Erro na ação",
  //         })
  //       );
  //   };

  //   const handleForm = (data) => {
  //     const { password_confirm, ...profile } = data;

  //     api
  //       .put(
  //         "/profile",
  //         { ...profile },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         dispatch(getUserListThunk());
  //         dispatch(getUserListThunk(1));
  //         // dispatch(getProfileThunk(???));
  //         setError("image_url", {
  //           message: "",
  //         });

  //         history.push("/profile");
  //         message.success("Atualizado");
  //       })
  //       .catch((err) => {
  //         message.error("Erro na atualização");

  //         setError("user_changes", {
  //           message: err.response.data.message,
  //         });
  //       });
  //   };
  return <> </>;
};
export default ProfileSettings;
