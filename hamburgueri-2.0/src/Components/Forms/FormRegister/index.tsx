import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./RegisterSchma";
import { useContext, useState } from "react";
import { Box, TextField } from "@mui/material";
import { AuthUserContext } from "../../../Providers/User/userContext";
import { iuserRegister } from "../../../Interface/Register";
import { BtnRegister, FormularioLogin } from "../FormLogin/styled";

export function FormRegister() {
  const { userRegister } = useContext(AuthUserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iuserRegister>({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const submit = (FormData: any) => {
    userRegister(FormData);
  };
  return (
    <FormularioLogin onSubmit={handleSubmit(submit)}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          type="text"
          id="name"
          label="Nome"
          variant="outlined"
          color={errors.name ? "error" : "success"}
          disabled={loading}
          {...register("name")}
        />
        {errors.name && <h5>{errors.name.message}</h5>}
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          type="text"
          id="email"
          label="email"
          variant="outlined"
          color={errors.email ? "error" : "success"}
          disabled={loading}
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
          type="password"
          id="password"
          label="password"
          variant="outlined"
          color={errors.password ? "error" : "success"}
          disabled={loading}
          {...register("password")}
        />
        {errors.password && <h5>{errors.password.message}</h5>}
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          type="password"
          id="confirmPassword"
          label="confirm Password"
          variant="outlined"
          color={errors.confirmPassword ? "error" : "success"}
          disabled={loading}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <h5>{errors.confirmPassword.message}</h5>}
      </Box>

      <BtnRegister disabled={loading} type="submit">
        {loading ? "Cadastrando..." : "Cadastrar"}
      </BtnRegister>
    </FormularioLogin>
  );
}
