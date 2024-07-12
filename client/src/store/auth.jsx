import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth/user`;

export const AuthProvider = ({children}) => {

    const [token , setToken] = useState(localStorage.getItem("token"));
    const [user , setUser] = useState("");
    const [isLoading , setIsLoading] = useState(true);
    const [services , setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token" , serverToken);
    };


    let isLoggedIn = !!token;
    console.log ("Is Logged IN",isLoggedIn);

    //tacking the logout functionalities
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    //JWT AUTHENTICATION - to get currently loggedIN user data
    const userAuthentication = async() => {
        try {
            setIsLoading(true);
            // token hume upar se localStorage se get kiya
            const response = await fetch(URL , {
                method: "GET",
                headers: {
                    Authorization : authorizationToken
                }
            })

            if (response.ok){
                const data = await response.json();
                //console.log ("User data",data);
                console.log ("User data",data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }else {
                console.log ("Error fetching user data");
                setIsLoading(false);
            }
            
        } catch (error) {

            console.error("Error Fetching user data");
            
        }


    }

    // to fetch the services data from the database
    const getServices = async () => {

        try {

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/data/service` , {
                method : "GET",
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.msg);
               // console.log(data);
               setServices(data.msg);
            }
            
        } catch (error) {
            console.log(`services frontend error : ${error}`);
        }

    }


    useEffect(() => {
        getServices();
        userAuthentication();
    } , []);

    return <AuthContext.Provider value={{  isLoggedIn , storeTokenInLS , LogoutUser , user, services, authorizationToken , isLoading}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {

    const authContextValue = useContext(AuthContext);

    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }

    return authContextValue;
}