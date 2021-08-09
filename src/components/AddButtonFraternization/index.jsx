import { useContext } from "react";

import { AdegaContext } from "../../Providers/adega";
import { FormaturaContext } from "../../Providers/formatura";
import { CasamentoContext } from "../../Providers/casamento";
import { ConfraternizacaoContext } from "../../Providers/confraternizacao";

export const AddButtonFraternization = ({ elt, type }) => {
  const { removeFromAdega } = useContext(AdegaContext);
  const { addToFraternizationPub } = useContext(ConfraternizacaoContext);

  const handleClick = () => {
    addToFraternizationPub(elt);
    removeFromAdega(elt);
  };

  return <button onClick={handleClick}>Adicionar bar confraternização!</button>;
};
