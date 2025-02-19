import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/*
* Ao entrar no site, o utilizador será redirecionado automaticamente para a home caso esteja logado.
* When entering the site, the user will be automatically redirected to the home page if they are logged in.
*/
const useAuth = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("vibraToken");
        const storedUser = localStorage.getItem("vibraUser");

        if (token && storedUser) {
            setUser(JSON.parse(storedUser));
        }
    });

    return useContext(AuthContext);
};
    
export default useAuth;