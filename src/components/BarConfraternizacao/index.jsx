import { useContext } from "react";

import { ConfraternizacaoContext } from "../../Providers/confraternizacao";

import SoldBeerCart from "../SoldBeerCard";

export const BarConfraternizacao = () => {
  const { fraternizationBeers } = useContext(ConfraternizacaoContext);
  return (
    <ul>
      {fraternizationBeers &&
        fraternizationBeers.map((elt) => (
          <li>
            <SoldBeerCart elt={elt} />
          </li>
        ))}
    </ul>
  );
};
