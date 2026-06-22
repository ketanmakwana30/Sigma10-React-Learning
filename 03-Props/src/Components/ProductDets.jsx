function ProductDets({ name, price, features }) {
  // const list = features.map((feature) => <li>{feature}</li>);
  const isDiscount = price > 30000;
  const styles = { backgroundColor: isDiscount ? "#444" : "" };

  return (
    <div className="product" style={styles}>
      <h1>{name}</h1>
      <div className="details">
        <p className="price">Price: {price}</p>
        <p>{features}</p>
        {/* <p>{list}</p>    */}
        {isDiscount && <p>5% Descount</p>}
      </div>
    </div>
  );
}

export default ProductDets;
