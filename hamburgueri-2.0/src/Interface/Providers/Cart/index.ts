import { iItens } from "../..";

export interface iItensProviders {
  searchInput: (inputValue: string) => void;
  removeItem: (productId: number) => void;
  getProducts: (productId: number) => void;
  logout: () => void;
  closeModal: () => void;
  filteredItens: string;
  setFilteredItens: React.Dispatch<React.SetStateAction<string>>;
  itensFilter: iItens[];
  itens: iItens[];
  buyItem: iItens[];
  total: () => number;
  modalOpen: boolean;
  modalClose: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
