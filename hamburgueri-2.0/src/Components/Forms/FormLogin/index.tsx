import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iLoginUser } from "../../../Interface/Login";
import Box from "@mui/material/Box";

import { AuthUserContext } from "../../../Providers/User/userContext";
import { LoginSchema } from "./LoginSchma";
import { BtnLogin, BtnRegister, FormularioLogin, TextRegister } from "./styled";

export function FormLogin() {
  const { UserLogin } = useContext(AuthUserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUser>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });

  const submit: SubmitHandler<iLoginUser> = async (formData: any) => {
    await UserLogin(formData);
  };

  const navigate = useNavigate();
  function Cadastrar() {
    navigate("/register");
  }

  return (
    <FormularioLogin onSubmit={handleSubmit(submit)}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TextField
  
          fullWidth
          label="Digite seu email"
          variant="outlined"
          type="email"
          color={errors.email ? "error" : "success"}
          {...register("email")}
        />
        {errors.email && <h5>{errors.email.message}</h5>}
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Digite sua senha"
          variant="outlined"
          type="password"
          color={errors.password ? "error" : "success"}
          {...register("password")}
        />
        {errors.password && <h5>{errors.password.message}</h5>}
      </Box>
      <BtnLogin>Logar</BtnLogin>
      <div>
        <TextRegister>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </TextRegister>
        <BtnRegister onClick={() => Cadastrar()}>Cadastrar</BtnRegister>
      </div>
    </FormularioLogin>
  );
}
