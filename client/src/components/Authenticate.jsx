// import React , {useState , createContext ,  useContext} from 'react'

// export const Authenticate = createContext() ;

// export  const AuthenticateProvider = ({children})=>{
//     const [isAuthenticate , setAuthenticate] = useState(true) ;
//     const [login , setLogin] = useState(false) ;
//     const [logout , setLogout] = useState(false) ;
    
//     return (<Authenticate.Provider value={{isAuthenticate , login , logout}}>
     
//      {children}

//     </Authenticate.Provider>) ;
// } ;


// export const useAuth = ()=>{
//     useContext(Authenticate) ;
// }



import React, { useState, createContext, useContext } from 'react'

export const Authenticate = createContext();

export const AuthenticateProvider = ({children}) => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [email , setEmail]  = useState(null) ;
    const [userId , setUserId] = useState(null) ;

   
    const login = (userEmail , userId) => {
        setIsAuthenticate(true) ;
        setEmail(userEmail) ;
        setUserId(userId) ;

    };
    const logout = () =>{
        setIsAuthenticate(false) ;
        setEmail(null) ;
        setUserId(null) ;
    }
   
    return (
        <Authenticate.Provider value={{isAuthenticate, login, logout , email , userId}}>
            {children}
        </Authenticate.Provider>
    );
};

export const useAuth = () => useContext(Authenticate);