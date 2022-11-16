import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import data from "../assets/db/bbdd.json";

const ProductView = () => {
  const { id: productId } = useParams();
  const { id, name, type } = data.find((item) => {
    return item.id === parseInt(productId);
  });

  return (
    <>
      <h3>{name}</h3>
      <h3>{type}</h3>
      <h3>{id}</h3>
    </>
  );
};

export default ProductView;
