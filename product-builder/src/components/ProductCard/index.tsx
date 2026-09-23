import "./index.scss";
import Button from "../ui/Button";
import type { IProduct } from "../../interfaces/IProduct";

interface IProps {
  product: IProduct;
  setproductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
}
const ProductCard = ({ product, setproductToEdit, openEditModal }: IProps) => {

  const {id, productTitle, productDescription, imgSource, category, colors, cost}: IProduct = product;
  function onEdit() {
      setproductToEdit(product);
      openEditModal();
  }
  return (
    <div className="product-container">
      <img src={imgSource} alt="Product Image" />
      <h3>{productTitle}</h3>
      <p>{productDescription}</p>

      <div className="colors flex gap-2 my-2">
        {colors.map((color, index) => (
          <span
            key={index}
            className="w-5 h-5 rounded-full border"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center w-full">
        <h4>{cost}</h4>
        <img src={category.logoUrl} alt="Brand" className="brand-img" />
      </div>
      <div className="flex w-full gap-2 mt-5">
        <Button
          children={"Edit"}
          className={"bg-indigo-700"}
          onClick={onEdit}
        />
        <Button
          children={"Destroy"}
          className={"bg-red-700"}
          onClick={() => alert("BI")}
        />
      </div>
    </div>
  );
};

export default ProductCard;
