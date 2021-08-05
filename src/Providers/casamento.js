import { createContext, useState } from "react";

export const CasamentoProvider = ({children}) => {
    
    const CasamentoContext = createContext([]);

    return(
        <CasamentoContext.Provider value={{}}>
            {children}
        </CasamentoContext.Provider>
    )
}