import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("Se tem nome né? favor colocar."),

  email: yup
    .string()
    .required("Em pleno 2022, ano da .... poem seu email certo"),

  password: yup
    .number()
    .required("Da pra criar uma senha por favor.")
    .min(8, "Senha tem que ter no minimo 8 numeros"),

  confirmPassword: yup
    .number()
    .required()
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
});
