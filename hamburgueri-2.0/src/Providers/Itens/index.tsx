import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../Api";
import { iItens } from "../../Interface";
import { iContextProps } from "../../Interface/Providers";
import { iItensProviders } from "../../Interface/Providers/Cart";

export const ItensContext = createContext({} as iItensProviders);

export function ItensProvider({ children }: iContextProps) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalClose, setmodalClose] = useState<boolean>(false);
  const [itens, setItens] = useState([] as iItens[]);
  const [itensFilter, setItensFilter] = useState([] as iItens[]);
  const [filteredItens, setFilteredItens] = useState("");
  const [buyItem, setBuyItem] = useState([] as iItens[]);

  function closeModal() {
    setmodalClose(true);
    setTimeout(() => {
      setmodalClose(false);
      setModalOpen(false);
    }, 5000);
  }

  function logout() {
    localStorage.removeItem("TokenHamburgueria");
    navigate("/");
  }

  async function getItens() {
    const token = localStorage.getItem("TokenHamburgueria");
    try {
      const response = await Api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItens(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  getItens();
  useEffect(() => {}, [itens]);
  function searchInput(inputValue: string) {
    const itensFilter = itens.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemInput = inputValue.toLowerCase();
      const itemCategory = item.category.toLowerCase();

      if (itemName.includes(itemInput) || itemCategory.includes(itemInput)) {
        return item;
      }
    });
    setItensFilter(itensFilter);
  }
  function getProducts(itensId: number) {
    const itensFind = itens.find((item) => {
      if (item.id === itensId) {
        toast.success(" O produto adicionado com sucesso!");
        return item;
      }
    });
    const itensCart = buyItem.find((item) => {
      if (item.id === itensId) {
        return item;
      }
    });

    if (!itensCart && itensFind !== undefined) {
      setBuyItem([...buyItem, itensFind]);
    }
  }
  function removeItem(productId: number) {
    const itensFilter = buyItem.filter((item) => {
      if (item.id !== productId) {
        toast.success(" O produto removido");
        return item;
      }
    });
    setBuyItem(itensFilter);
  }
  function total() {
    const prices = buyItem.map((element) => {
      return element.price;
    });

    const totalPrice = prices.reduce((InV, Acl) => {
      return InV + Acl;
    }, 0);

    return totalPrice;
  }
  return (
    <ItensContext.Provider
      value={{
        searchInput,
        filteredItens,
        setFilteredItens,
        itensFilter,
        itens,
        logout,
        getProducts,
        buyItem,
        removeItem,
        closeModal,
        total,
        modalOpen,
        modalClose,
        setModalOpen,
      }}
    >
      {children}
    </ItensContext.Provider>
  );
}
