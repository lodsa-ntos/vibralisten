import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/*
* Ao entrar no site, o utilizador será redirecionado automaticamente para a home caso esteja logado.
* When entering the site, the user will be automatically redirected to the home page if they are logged in.
*/
const useAuth = () => {

    const { user, login } = useContext(AuthContext);

    useEffect(() => {
        
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser && !user) {
            login(JSON.parse(storedUser), token);
        }

    }, [user, login]);

    return { user };
};
    
export default useAuth;