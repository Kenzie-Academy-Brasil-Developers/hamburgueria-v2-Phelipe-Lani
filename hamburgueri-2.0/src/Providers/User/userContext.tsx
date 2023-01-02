import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../Api";
import { iItens } from "../../Interface";
import { iLoginUser } from "../../Interface/Login";
import { iContextProps } from "../../Interface/Providers";
import { iUserProviderProps } from "../../Interface/Providers/User";
import { iuserRegister } from "../../Interface/Register";


export const AuthUserContext = createContext({} as iUserProviderProps);

export function UserProvider({ children }: iContextProps) {
  const [authenticUser, setAuthenticUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [itens, setitens] = useState<iItens>();
  const navigate = useNavigate();

  async function userRegister(formData: iuserRegister) {
    try {
      const response = await Api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo de errado nao esta certo!");
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("TokenHamburgueria");

      let nav = false;

      if (
        window.location.pathname !== "/" &&
        window.location.pathname !== "/register"
      ) {
        if (!localStorage.getItem("TokenHamburgueria")) {
          if (!nav) {
            nav = true;
            navigate("/login");
          }
        }
      } else {
        nav = false;
      }
      try {
        const response = await Api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setitens(response.data);

        setAuthenticUser(true);
        navigate("/home");
      } catch (error) {
        console.log(error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    }
    autoLogin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itens]);
  async function UserLogin(formData: iLoginUser) {
    try {
      const response = await Api.post("/login", formData);
      const { accessToken } = response.data;
      setAuthenticUser(true);
      localStorage.setItem("TokenHamburgueria", accessToken);
      toast.success("Login efetuado com sucesso!");
      setTimeout(() => {
        navigate("/home");
      }, 6000);
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos!");
    }
  }
  return (
    <AuthUserContext.Provider
      value={{
        userRegister,
        authenticUser,
        UserLogin,
        loading,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}
