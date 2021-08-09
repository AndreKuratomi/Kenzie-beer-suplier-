import { useContext } from "react";

import { AdegaContext } from "../../Providers/adega";
import { CasamentoContext } from "../../Providers/casamento";

export const AddButtonMariage = ({ elt, type }) => {
  const { removeFromAdega } = useContext(AdegaContext);
  const { addToMariagePub } = useContext(CasamentoContext);

  const handleClick = () => {
    addToMariagePub(elt);
    removeFromAdega(elt);
  };

  return <button onClick={handleClick}>Adicionar bar casamento!</button>;
};
