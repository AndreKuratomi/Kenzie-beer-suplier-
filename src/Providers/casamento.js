import { createContext, useState } from "react";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [mariageBeers, setMariageBeers] = useState([]);

  const addToMariagePub = (item) => {
    setMariageBeers([...mariageBeers, item]);
  };

  const removeFromMariagePub = (item) => {
    setMariageBeers(mariageBeers.filter((elt) => elt.id !== item.id));
  };

  return (
    <CasamentoContext.Provider
      value={{ addToMariagePub, removeFromMariagePub }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
