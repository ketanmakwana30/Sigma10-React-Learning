import products from "../Data/data.js";

function Product() {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="products" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
