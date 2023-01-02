import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Em pleno 2022, ano da .... poem seu email certo"),

  password: yup
    .string()
    .required("Digite sua senha, correta desta vez!")
});
