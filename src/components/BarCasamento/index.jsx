import { useContext } from "react";

import { CasamentoContext } from "../../Providers/casamento";

import SoldBeerCart from "../SoldBeerCard";

export const BarCasamento = () => {
  const { mariageBeers } = useContext(CasamentoContext);
  return (
    <ul>
      {mariageBeers &&
        mariageBeers.map((elt) => (
          <li>
            <SoldBeerCart elt={elt} />
          </li>
        ))}
    </ul>
  );
};
