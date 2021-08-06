import { useContext } from "react";

import { FormaturaContext } from "../../Providers/formatura";

import { SoldBeerCard } from "../SoldBeerCard";

export const BarFormatura = () => {
  const { graduationBeers } = useContext(FormaturaContext);
  return (
    <ul>
      {graduationBeers &&
        graduationBeers.map((elt) => (
          <li>
            <SoldBeerCard elt={elt} />
          </li>
        ))}
    </ul>
  );
};
