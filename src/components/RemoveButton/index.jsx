import { useContext } from "react";

import { AdegaContext } from "../../Providers/adega";
import { FormaturaContext } from "../../Providers/formatura";
import { CasamentoContext } from "../../Providers/casamento";
import { ConfraternizacaoContext } from "../../Providers/confraternizacao";

export const RemoveButton = ({ elt, type }) => {
  const { addBackToAdega } = useContext(AdegaContext);
  const { removeFromGraduationPub } = useContext(FormaturaContext);
  const { removeFromMariagePub } = useContext(CasamentoContext);
  const { removeFromFraternizationPub } = useContext(ConfraternizacaoContext);

  const handleClick = () => {
    if (elt.id >= 1 && elt.id <= 8) {
      removeFromGraduationPub(elt);
      addBackToAdega(elt);
    } else if (elt.id >= 9 && elt.id <= 15) {
      removeFromMariagePub(elt);
      addBackToAdega(elt);
    } else if (elt.id >= 16 && elt.id <= 25) {
      removeFromFraternizationPub(elt);
      addBackToAdega(elt);
    }
  };

  return <button onClick={handleClick}>Remover do evento</button>;
};
