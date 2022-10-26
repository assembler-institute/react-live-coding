import GridLayout from "../Grid/GridLayout";
import ProductCard from "../ProductCard/ProductCard";

const ProductsContainer = () => {
  return (
    <div className="products__bg">
      <GridLayout>
        <ProductCard />
      </GridLayout>
    </div>
  );
};

export default ProductsContainer;
