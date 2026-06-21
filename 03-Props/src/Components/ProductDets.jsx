function ProductDets({ name, features }) {
    // const list = features.map((feature) => <li>{feature}</li>);

  return (
    <div className="product">
      <h1>{name}</h1>
      <p>{features}</p>
      {/* <p>{list}</p>    */}
    </div>
  );
}

export default ProductDets;
