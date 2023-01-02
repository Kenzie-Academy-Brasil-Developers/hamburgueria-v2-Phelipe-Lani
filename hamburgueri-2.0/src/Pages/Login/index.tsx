import { useState } from "react";
import Group from "../../img/Bolinhas.svg";
import SubLogo from "../../img/small-branding.svg";
import { FormLogin } from "../../Components/Forms/FormLogin";
import { Container, ContainerLogo, DivForm } from "./styled";

export function LoginPage() {
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <DivForm>
        <h1>Login</h1>
        <FormLogin />
      </DivForm>
      <ContainerLogo >
        <img src={SubLogo} alt="Sub Logo " />
        <img src={Group} className="bolinhas" alt="Bolinhas " />
      </ContainerLogo>
    </Container>
  );
}
