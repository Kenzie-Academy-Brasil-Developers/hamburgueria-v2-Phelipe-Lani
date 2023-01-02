import { iLoginUser } from "../../Login";
import { iuserRegister } from "../../Register";

export interface iUserProviderProps {
    UserLogin: (formData: iLoginUser) => void;
    userRegister: (FormData: iuserRegister) => void;
    authenticUser: boolean;
    loading: boolean;
  }
