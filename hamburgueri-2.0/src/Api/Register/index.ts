import { Api } from ".."

async function UserRegister(formData,setLoad){
    try {
        setLoad(true)
        const response = await Api.post("/users", formData){
            toast.success("Usuario registrado com sucesso!");
            
        }
    } catch (error) {
        
    }
}