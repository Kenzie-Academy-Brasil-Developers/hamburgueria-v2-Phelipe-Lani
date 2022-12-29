import { toast } from "react-toastify";
import { Api } from "..";
import { iAcessUser } from "../../Interface";

async function UserLogin(formData:iAcessUser, setLoad){
    
    try {
        setLoad(true)

        const response = await Api.post("/login", formData);

        const { token, user } = response.data;

        setUsuario(user);

        localStorage.setItem("Token-Hamburg_2.0", token);
        
    } catch (error) {
        toast.error("Ops! Algo deu errado");
        console.log(error)       
        
    }finally{
        setLoad(false)
    }

}