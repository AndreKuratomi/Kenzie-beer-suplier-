export const BeerCard = ({ elt }) => {
  console.log(elt);
  return (
    <article key={elt.id}>
      <figure>
        <img src={elt.image_url} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </figure>
      <p>Name: {elt.name}</p>
      <p>First brewed: {elt.first_brewed}</p>
      <p>Description: {elt.description}</p>
      <p>
        Litros:
        {elt.volume.value}
        {elt.volume.unit}
      </p>
      <button onClick={"dfsfs"}>Choose this beer!</button>
    </article>
  );
};
