import {createContext, useState} from "react";

export const ConfraternizacaoProvider = ({children}) => {

    const ConfraternizacaoContext = createContext([])

    return(
        <ConfraternizacaoContext.Provider value={{}}>
            {children}
        </ConfraternizacaoContext.Provider>
    )
}