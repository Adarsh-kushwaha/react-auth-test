import { createContext } from "react";
import React,{useContext, useState} from "react";
export const UserContext = createContext({
    user: null,
    login: () => { },
    logout: () => { }

})



export function UserContextProvider({ children }) {
    const [user, setUser] = useState({name:"guest", isLogin:false});
    
    const login=(username)=> {
        setUser({name:username, isLogin:true})
        
    }

    const logout =()=>{
        setUser({name:"guest", isLogin:false})
    }
    
    return (

        <>
            <UserContext.Provider value={{user:user, login:login, logout:logout}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export function useUserContext(){
    const {user, login, logout} = useContext(UserContext);
    

    return{user, login, logout}
}