import styled from "styled-components";
export const DIvItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
`;
export const Vitrine = styled.ul`
  width: 20vw;
  height: 24vw;
  border: 2px solid #e0e0e0;
`;
export const Imgs = styled.img`
  height: 11vw;
  width: 11vw;
`;
export const FigureaAll = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;
export const DivNameIsPrice = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5vw;
  padding: 0.5vw;
`;
export const NameItem = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.25vw;

  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(51, 51, 51, 1);
`;
export const CategoryItem = styled.h5`
  font-family: "Inter", sans-serif;
  font-size: 0.9vw;
  font-weight: 400;
  line-height: 16px;
  color: #828282;
`;
export const PriceItem = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.3vw;
  font-weight: 600;
  line-height: 24px;
  color: rgba(39, 174, 96, 1);
`;
export const BtnAddCart
 = styled.button`
  height: 3vw;
  width: 8vw;
  left: 20px;
  top: 133px;
  border-radius: 8px;
  padding: 0px 20px 0px 20px;
  background-color: rgba(39, 174, 96, 1);
  border-color: rgba(39, 174, 96, 1);
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.9vw;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;
export const DivSecund = styled.div`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  gap: 5vw;
`;