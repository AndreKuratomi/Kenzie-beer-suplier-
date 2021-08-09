import { useContext } from "react";

import { AdegaContext } from "../../Providers/adega";
import { FormaturaContext } from "../../Providers/formatura";

export const AddButtonGraduation = ({ elt, type }) => {
  const { removeFromAdega } = useContext(AdegaContext);
  const { addToGraduationPub } = useContext(FormaturaContext);

  const handleClick = () => {
    addToGraduationPub(elt);
    removeFromAdega(elt);
  };

  return <button onClick={handleClick}>Adicionar bar formatura!</button>;
};
