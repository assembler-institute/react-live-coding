import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import data from "../assets/db/bbdd.json";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  console.log(searchParams);

  const handleInput = ({ target }) => {
    const { value } = target;
    console.log(value);
    setSearchParams({ query: value });
  };

  return (
    <header>
      <input
        type="text"
        value={query}
        placeholder="Search"
        name="filter"
        onChange={handleInput}
      />
      <section>
        {data
          .filter((products) => {
            if (!query) return true;
            else {
              const productName = products.name.toLowerCase();
              return productName.includes(query.toLowerCase());
            }
          })
          .map(({ id, name, type }) => {
            return (
              <Link to={`/shop/${id}`} key={id}>
                <h3>{name}</h3>
                <hr />
              </Link>
            );
          })}
        <Outlet />
      </section>
    </header>
  );
};

export default Shop;
