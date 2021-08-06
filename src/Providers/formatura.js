import { createContext, useState } from "react";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [graduationBeers, setGraduationBeers] = useState([]);

  const addToGraduationPub = (item) => {
    setGraduationBeers([...graduationBeers, item]);
  };

  const removeFromGraduationPub = (item) => {
    setGraduationBeers(graduationBeers.filter((elt) => elt.id !== item.id));
  };

  return (
    <FormaturaContext.Provider
      value={{ graduationBeers, addToGraduationPub, removeFromGraduationPub }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
