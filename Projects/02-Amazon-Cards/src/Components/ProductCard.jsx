const ProductCard = ({ name, idx }) => {
  const image = [
    "https://i.pinimg.com/736x/51/e5/2f/51e52f2230858280c98c7ae4067b682e.jpg",
    "https://m.media-amazon.com/images/I/71rz2HuQ4LL.jpg",
    "https://i.pinimg.com/1200x/6c/bd/d0/6cbdd07c29ee89c369a4d605d1a650eb.jpg",
  ];
  const newPrice = ["$1999", "$999", "$1590"];
  const oldPrice = ["$2999", "$1109", "$2599"];
  return (
    <div className="productCard">
      <img src={image[idx]} />
      <h3 className="h3">{name}</h3>
      <div className="price">
        <span className="new">{newPrice[idx]}</span>
        <span className="old">{oldPrice[idx]}</span>
      </div>
      <button>Buy now</button>
    </div>
  );
};

export default ProductCard;
