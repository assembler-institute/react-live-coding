import products from "../../../assets/db/db";
import CounterApp from "../Counter/CounterApp";

import "./products.css";

const ProductCard = () => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <div className="container">
            <div className="card">
              <img src={product.img} alt="" />
              <div className="card-body">
                <div className="row">
                  <div className="card-title">
                    <h4>{product.title}</h4>
                    <h3>{product.price}€</h3>
                  </div>
                  <div className="view-btn">
                    <a href="/">View Details</a>
                  </div>
                </div>
                <hr />
                <p>{product.description}</p>
                <div className="btn-group">
                  <div className="btn">
                    <a href="/">Buy Now</a>
                  </div>
                  <CounterApp />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
