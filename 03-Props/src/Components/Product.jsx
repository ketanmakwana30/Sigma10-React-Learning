import ProductDets from "./ProductDets.jsx";
import MsgBox from "./MsgBox.jsx";

function Product() {
  let feature = ["Hi-tech", "Fast", "Latest"]; // Array
  let feature2 = { 1: "Hi-tech", 2: "Fast", 3: "Latest" }; // Object
  let feature3 = [<li>Hi-tect</li>, <li>Fast</li>, <li>Latest</li>]; // Array of element

  return (
    <>
      <ProductDets name="Samsung" price={56000} features={feature} />
      <ProductDets name="Vivo V60" price={83000} features={feature2[1]} />

      <ProductDets name="Radmi" price={16000} features={["Fast--", "Latest"]} />
      <ProductDets
        price={23000}
        name="Realme"
        features={{ 1: "Hi-tech", 2: "Fast", 3: "Latest" }[3]}
      />

      <ProductDets name="onePlus" price={43000} features={feature3} />

      {/* <ProductDets name="Oppo" features={feature}  />  */}

      <MsgBox userName="Ketan" textColor="red" />
    </>
  );
}

export default Product;
