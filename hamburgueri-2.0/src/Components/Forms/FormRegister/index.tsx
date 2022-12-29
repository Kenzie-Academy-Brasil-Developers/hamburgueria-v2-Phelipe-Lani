import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iAcessUser } from "../../../Interface";
import { RegisterSchema } from "./RegisterSchma";

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAcessUser>({ resolver: yupResolver(RegisterSchema) });

  function submit(data: {} | iAcessUser) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <input type="text" id="name" placeholder=" " {...register("name")} />
        <label>Nome</label>
        {errors.name && <h5>{errors.name.message}</h5>}
      </div>
      <div>
        <input type="text" placeholder=" " {...register("email")} />
        <label htmlFor="email">Email</label>
        {errors.email && <h5>{errors.email.message}</h5>}
      </div>
      <div>
        <input type="password" placeholder=" " {...register("password")} />
        <label>Senha</label>
        {errors.password && <h5>{errors.password.message}</h5>}
      </div>
      <div>
        <input type="confirmPassword" placeholder=" " {...register("confirmPassword")} />
        <label>Senha</label>
        {errors.confirmPassword && <h5>{errors.confirmPassword.message}</h5>}
      </div>
      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}
