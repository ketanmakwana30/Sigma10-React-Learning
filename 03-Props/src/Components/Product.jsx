import ProductDets from "./ProductDets";

function Product() {

  let feature = ["Hi-tech", "Fast", "Latest"];                                 // Array    
  let feature2 = {1: "Hi-tech", 2: "Fast", 3: "Latest"}                          // Object
  let feature3 = [<li>Hi-tect</li>,<li>Fast</li>,<li>Latest</li>];              // Array of element   

  return (
    <>
      <ProductDets name="Samsung" features={feature} />
      <ProductDets name="Vivo V60" features={feature2[1]} />

      <ProductDets name="Radmi" features={["Fast--", "Latest"]} />
      <ProductDets name="Realme" features={{1: "Hi-tech", 2: "Fast", 3: "Latest"}[3 ] } />

      <ProductDets name="onePlus" features={feature3}  />

      {/* <ProductDets name="Oppo" features={feature}  />  */}
    </>
  );
}

export default Product;
