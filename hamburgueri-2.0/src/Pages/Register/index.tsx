import { Link } from "react-router-dom";
import { FormRegister } from "../../Components/Forms/FormRegister";
import Imagem35 from "../../img/Bolinhas.svg";
import SubLogo from "../../img/small-branding.svg";
import { Container, ContainerLogo, DivForm } from "../Login/styled";
import { DivNav } from "./styled";
export function RegisterPage() {
  return (
    <Container>
      <ContainerLogo>
        <img src={SubLogo} alt="Sub Logo " />
        <img src={Imagem35} className="bolinhas" alt="Bolinhas " />
      </ContainerLogo>
      <DivForm>
        <DivNav>
          <h1>Cadastro</h1>
          <Link className="link" to="/">Retornar para o login</Link>
        </DivNav>
        <FormRegister />
      </DivForm>
    </Container>
  );
}
