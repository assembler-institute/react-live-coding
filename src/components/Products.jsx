import products from "../assets/db/db";
import CounterApp from "./CounterApp";
import ProductCard from "./ProductCard";
import "./products.css";

// aquí puedes meter algo de lógica de JS

const Products = () => {
  return (
    <>
      <h1>ZapaTeando</h1>
      <CounterApp />
      {products.map((product) => (
        <ProductCard key={product.id}>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <img className="product__img" src={product.img} alt={product.title} />
        </ProductCard>
      ))}
    </>
  );
};

export default Products;
