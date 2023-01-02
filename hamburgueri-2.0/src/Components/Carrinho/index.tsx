import { useContext } from "react";
import { ItensContext } from "../../Providers/Itens";
import {
  Imgs,
  BtnAddCart,
  CategoryItem,
  DivNameIsPrice,
  DIvItens,
  DivSecund,
  FigureaAll,
  NameItem,
  PriceItem,
  Vitrine,
} from "./styled";

export function ListItens() {
  const { itensFilter, itens, getProducts } = useContext(ItensContext);

  return (
    <DIvItens>
      <DivSecund>
        {itensFilter.length !== 0
          ? itensFilter.map((element) => {
              const { id, name, category, price, img } = element;
              return (
                <Vitrine key={id}>
                  <FigureaAll>
                    <Imgs src={img} alt={name} />
                  </FigureaAll>
                  <DivNameIsPrice>
                    <NameItem>{name}</NameItem>
                    <CategoryItem>{category}</CategoryItem>
                    <PriceItem>R$ {price.toFixed(2)}</PriceItem>
                    <BtnAddCart onClick={() => getProducts(id)}>
                      Adicionar
                    </BtnAddCart>
                  </DivNameIsPrice>
                </Vitrine>
              );
            })
          : itens.map((element) => {
              const { id, name, category, price, img } = element;
              return (
                <Vitrine key={id}>
                  <FigureaAll>
                    <Imgs src={img} alt={name} />
                  </FigureaAll>
                  <DivNameIsPrice>
                    <NameItem>{name}</NameItem>
                    <CategoryItem>{category}</CategoryItem>
                    <PriceItem>R$ {price.toFixed(2)}</PriceItem>
                    <BtnAddCart onClick={() => getProducts(id)}>
                      Adicionar
                    </BtnAddCart>
                  </DivNameIsPrice>
                </Vitrine>
              );
            })}
      </DivSecund>
    </DIvItens>
  );
}

