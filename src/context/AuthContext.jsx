import { createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    // eslint-disable-next-line no-undef
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const login = () =>{
        setCurrentUser({
            id: 1,
            name: "Moklasur Rahman (TAJ)",
            profileImg: "/assets/person/myimg.jpg"
        });
    };

    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return <AuthContext.Provider value={{currentUser, login}}>
        {children}
    </AuthContext.Provider>
    
}