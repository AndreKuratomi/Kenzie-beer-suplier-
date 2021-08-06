import { RemoveButton } from "../RemoveButton";

export const SoldBeerCard = ({ elt }) => {
  return (
    <article key={elt.id}>
      <figure>
        <img src={elt.image_url} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </figure>
      <p>Name: {elt.name}</p>
      <RemoveButton elt={elt}>Remove this beer...</RemoveButton>
    </article>
  );
};