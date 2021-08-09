import { RemoveFromGraduationButton } from "../RemoveFromGraduationButton";

export const SoldBeerCardToGraduation = ({ elt }) => {
  return (
    <article key={elt.id}>
      <figure>
        <img src={elt.image_url} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </figure>
      <p>
        <span>Name: </span>
        {elt.name}
      </p>
      <RemoveFromGraduationButton elt={elt}>
        Remover deste bar
      </RemoveFromGraduationButton>
    </article>
  );
};
