import { useContext } from "react";

import { AdegaContext } from "../../Providers/adega";
import { ConfraternizacaoContext } from "../../Providers/confraternizacao";

export const RemoveFromFraternizationButton = ({ elt, type }) => {
  const { addBackToAdega } = useContext(AdegaContext);
  const { removeFromFraternizationPub } = useContext(ConfraternizacaoContext);

  const handleClick = () => {
    removeFromFraternizationPub(elt);
    addBackToAdega(elt);
  };

  return <button onClick={handleClick}>Remover do evento</button>;
};
