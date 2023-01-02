import styled from "styled-components";
export const FormularioLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  gap: 1rem;
  align-items: center;

  .Inputs {
    width: 100%;
  }
  div {
    width: 100%;
  }
`;

export const TextRegister = styled.p`
  font-family: " Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #999999;
  width: 70%;
  margin: 1rem auto;
`;
export const BtnLogin = styled.button`
  height: 40px;
  width: 100%;
  background: #219653;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  border: transparent;
  :hover {
    background: #93d7af;
    border: 2px solid #93d7af;
    border-radius: 8px;
  }
`;
export const BtnRegister = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  background: #f5f5f5;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: #999999;
  cursor: pointer;
  border: transparent;

  :hover {
    background: #219653;
    color: #f5f5f5;
  }
`;
