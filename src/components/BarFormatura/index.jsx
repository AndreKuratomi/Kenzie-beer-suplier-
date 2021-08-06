import { useContext } from "react";

import { FormaturaContext } from "../../Providers/formatura";

import SoldBeerCart from "../SoldBeerCard";

export const BarFormatura = () => {
  const { graduationBeers } = useContext(FormaturaContext);
  return (
    <ul>
      {graduationBeers &&
        graduationBeers.map((elt) => (
          <li>
            <SoldBeerCart elt={elt} />
          </li>
        ))}
    </ul>
  );
};
