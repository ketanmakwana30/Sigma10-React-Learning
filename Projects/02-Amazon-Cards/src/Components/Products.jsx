import ProductCard from "../Components/ProductCard.jsx";
import "../Components/product.css";

const Products = () => {
  return (
    <div className="products">
      <ProductCard idx={0} name={"MacBook Air (M5)"} />
      <ProductCard idx={1} name={"Samsung Galaxy S26 Plus 5G"} />
      <ProductCard idx={2} name={"iPad Pro in Space Black"} />
    </div>
  );
};

export default Products;
