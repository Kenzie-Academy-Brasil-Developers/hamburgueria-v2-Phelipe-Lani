import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  margin: 3rem auto;
  width: 60%;
  height: 550px;
`;
export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #f5f5f5;
  width: 50%;
  height: 450px;
  gap: 2.5rem;
  padding: 1rem;
  box-sizing: border-box;


  h1 {
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    padding: 10px;
  }
`;
export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
margin:6rem 2rem 0   ;
  box-sizing: border-box;
  width: 40%;
  height: 600px;


  img {
    width: 90%;
    height: 30%;
  }
  .bolinhas {
    width: 60%;
    height: 40%;
  }
`;
