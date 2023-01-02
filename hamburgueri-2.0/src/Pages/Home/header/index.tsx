import { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCartCheck, BsTrash } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { ItensContext } from "../../../Providers/Itens";
import Logo from "../../../img/Logo.svg";

import {
  BtnClose,
  BtnLogoutHeader,
  BtnRemoveSale,
  BtnSearch,
  ButtonSale,
  DivModal,
  FundodivModal,
  Header,
  ImgLogo,
  ImgSale,
  InputSearch,
  LiProductSale,
  MessageSale,
  NameProdctCarrinho,
  SpanHeaderReg,
  SpanModalClose,
  SpanNameRemove,
  SpanTotalSale,
  TitleModal,
  TotalName,
  TotalPrice,
} from "./styled";
export function HeaderHome() {
  const {
    closeModal,
    logout,
    buyItem,
    modalOpen,
    setModalOpen,
    total,
    searchInput,
    removeItem,
  } = useContext(ItensContext);
  let CarrrinhoTotal = total();

  function BtnCloseModal() {
    return (
      <SpanModalClose>
        <TitleModal>Carrinho</TitleModal>
        <BtnClose onClick={() => closeModal()}>X</BtnClose>
      </SpanModalClose>
    );
  }

  return (
    <>
      {modalOpen && (
        <>
          <BtnCloseModal />
          <div>
            <DivModal>
              {buyItem.length > 0 ? (
                buyItem.map((produto) => {
                  return (
                    <>
                      <LiProductSale>
                        <ImgSale src={produto.img} alt={produto.name} />
                        <SpanNameRemove>
                          <NameProdctCarrinho>
                            {produto.name}{" "}
                          </NameProdctCarrinho>
                          <BtnRemoveSale onClick={() => removeItem(produto.id)}>
                            <BsTrash />
                          </BtnRemoveSale>
                        </SpanNameRemove>
                      </LiProductSale>
                      <SpanTotalSale>
                        <TotalName>Total</TotalName>
                        <TotalPrice>R$ {CarrrinhoTotal.toFixed(2)}</TotalPrice>
                      </SpanTotalSale>
                    </>
                  );
                })
              ) : (
                <MessageSale>Não há produtos no carrinho</MessageSale>
              )}
            </DivModal>
          </div>
        </>
      )}

      <Header>
        <ImgLogo src={Logo} alt="burguer-kenzie /logo header/" />
        <SpanHeaderReg>
          <InputSearch
            placeholder="faça sua Busca"
            onChange={(data) => searchInput(data.target.value)}
          />
          <BtnSearch>
            <BiSearch />
          </BtnSearch>

          <ButtonSale onClick={() => setModalOpen(true)}>
            <BsCartCheck />
          </ButtonSale>
          <BtnLogoutHeader onClick={() => logout()}>
            <RxExit />
          </BtnLogoutHeader>
        </SpanHeaderReg>
      </Header>
    </>
  );
}
