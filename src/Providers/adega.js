import { createContext, useState } from "react";

export const AdegaContext = createContext([]);

export const AdegaProvider = ({ children }) => {
  const [adega, setAdega] = useState([]);

  const addBackToAdega = (item) => {
    setAdega([...adega, item]);
  };

  const removeFromAdega = (item) => {
    setAdega(adega.filter((elt) => elt.id !== item.id));
  };

  return (
    <AdegaContext.Provider
      value={{ adega, setAdega, addBackToAdega, removeFromAdega }}
    >
      {children}
    </AdegaContext.Provider>
  );
};
