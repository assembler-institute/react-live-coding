import React from "react";

const ProductCard = ({ children }) => {
  return (
    <>
      <div className="card">{children}</div>
    </>
  );
};

export default ProductCard;
