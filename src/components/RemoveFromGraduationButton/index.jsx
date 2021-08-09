import { useContext } from "react";

import { AdegaContext } from "../../Providers/adega";
import { FormaturaContext } from "../../Providers/formatura";

export const RemoveFromGraduationButton = ({ elt, type }) => {
  const { addBackToAdega } = useContext(AdegaContext);
  const { removeFromGraduationPub } = useContext(FormaturaContext);

  const handleClick = () => {
    removeFromGraduationPub(elt);
    addBackToAdega(elt);
  };

  return <button onClick={handleClick}>Remover do evento</button>;
};
