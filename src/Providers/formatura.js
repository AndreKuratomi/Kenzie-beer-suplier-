import {createContext, useState} from "react"

export const FormaturaProvider = ({children}) => {
    
    const FormaturaContext = createContext([]);

    return(
        <FormaturaContext.Provider value={{}}>
            {children}
        </FormaturaContext.Provider>
    )
}