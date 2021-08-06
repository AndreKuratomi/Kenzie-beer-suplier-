import { createContext, useState } from "react";

export const ConfraternizacaoContext = createContext([]);

export const ConfraternizacaoProvider = ({ children }) => {
  const [fraternizationBeers, setFraternizationBeers] = useState([]);

  const addToFraternizationPub = (item) => {
    setFraternizationBeers([...fraternizationBeers, item]);
  };

  const removeFromFraternizationPub = (item) => {
    setFraternizationBeers(
      fraternizationBeers.filter((elt) => elt.id !== item.id)
    );
  };

  return (
    <ConfraternizacaoContext.Provider
      value={{ addToFraternizationPub, removeFromFraternizationPub }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
