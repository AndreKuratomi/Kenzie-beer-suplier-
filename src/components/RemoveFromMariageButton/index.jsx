import { useContext } from "react";

import { AdegaContext } from "../../Providers/adega";
import { CasamentoContext } from "../../Providers/casamento";

export const RemoveFromMariageButton = ({ elt, type }) => {
  const { addBackToAdega } = useContext(AdegaContext);
  const { removeFromMariagePub } = useContext(CasamentoContext);

  const handleClick = () => {
    removeFromMariagePub(elt);
    addBackToAdega(elt);
  };

  return <button onClick={handleClick}>Remover do evento</button>;
};
