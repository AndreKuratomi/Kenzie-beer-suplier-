import { useContext } from "react";

import { AdegaContext } from "../../Providers/adega";
import { FormaturaContext } from "../../Providers/formatura";
import { CasamentoContext } from "../../Providers/casamento";
import { ConfraternizacaoContext } from "../../Providers/confraternizacao";

export const AddButton = ({ elt, type }) => {
  const { removeFromAdega } = useContext(AdegaContext);
  const { addToGraduationPub } = useContext(FormaturaContext);
  const { addToMariagePub } = useContext(CasamentoContext);
  const { addToFraternizationPub } = useContext(ConfraternizacaoContext);

  const handleClick = () => {
    if (elt.id >= 1 && elt.id <= 8) {
      addToGraduationPub(elt);
      removeFromAdega(elt);
    } else if (elt.id >= 9 && elt.id <= 15) {
      addToMariagePub(elt);
      removeFromAdega(elt);
    } else if (elt.id >= 16 && elt.id <= 25) {
      addToFraternizationPub(elt);
      removeFromAdega(elt);
    }
  };

  return <button onClick={handleClick}>Adicionar ao evento!</button>;
};
