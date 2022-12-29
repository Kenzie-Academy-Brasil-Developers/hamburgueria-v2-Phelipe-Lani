import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../Api";

export const AuthUserContext = createContext({});

interface iUserContextProps {
  children: React.ReactNode;
}

export function UserContext({ children }: iUserContextProps) {
    const [ loading , setLoad] = useState(true)
    const [validating, setValidating] = useState(false)
    const navigate = useNavigate()
    const [usuario,setUsuario] = useState(null)
    






  return (
    <AuthUserContext.Provider value={{}}>{children}</AuthUserContext.Provider>
  );
}
