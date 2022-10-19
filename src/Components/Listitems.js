import React from "react";
import "./Listitems.css";
const Listitems = ({ products, viewstate }) => {
  console.log(products);
  return (
    <>
      <h1>List of items</h1>

      {viewstate ? (
        <div className="products-list-1">
          {products.map((curElem, index) => {
            return (
              <div className="card" key={index}>
                <img src={curElem.image} id="product-img" />
                <p>{curElem.name}</p>
                <p>{curElem.company}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="products-list-2">
          {products.map((curElem, index) => {
            return (
              <div>
                <img src={curElem.image} id="product-img" />

                <p key={index}>{curElem.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Listitems;
