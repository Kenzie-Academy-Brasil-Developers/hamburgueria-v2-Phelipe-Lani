import { Link } from "react-router-dom";
import { FormRegister } from "../../Components/Forms/FormRegister";
import Imagem35 from "../../img/Group 135.svg";
export function RegisterPage() {
  return (
    <main>
      <img src={Imagem35} alt="Emblema Kenzie Hamburgueria" />
      <div>
        <div>
          <h1>Cadastro</h1>
          <Link to="/">Retornar para o login</Link>
        </div>
        <FormRegister />
      </div>
    </main>
  );
}
