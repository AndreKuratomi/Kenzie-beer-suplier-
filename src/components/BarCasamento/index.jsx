import { useContext } from "react";

import { CasamentoContext } from "../../Providers/casamento";

import { SoldBeerCard } from "../SoldBeerCard";

export const BarCasamento = () => {
  const { mariageBeers } = useContext(CasamentoContext);
  return (
    <ul>
      {mariageBeers &&
        mariageBeers.map((elt) => (
          <li>
            <SoldBeerCard elt={elt} />
          </li>
        ))}
    </ul>
  );
};
