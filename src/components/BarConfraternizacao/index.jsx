import { useContext } from "react";

import { ConfraternizacaoContext } from "../../Providers/confraternizacao";

import { SoldBeerCard } from "../SoldBeerCard";

export const BarConfraternizacao = () => {
  const { fraternizationBeers } = useContext(ConfraternizacaoContext);
  return (
    <ul>
      {fraternizationBeers &&
        fraternizationBeers.map((elt) => (
          <li>
            <SoldBeerCard elt={elt} />
          </li>
        ))}
    </ul>
  );
};
