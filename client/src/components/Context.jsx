import React , {createContext, useContext , useState} from "react"

export const Context = createContext() ;

export const DetailsProvider = ({children})=>{

    const [details , setDetails] = useState([]) ;
    return (<Context.Provider value={{details , setDetails}}>

      {children}

    </Context.Provider> ) ;
} ;
