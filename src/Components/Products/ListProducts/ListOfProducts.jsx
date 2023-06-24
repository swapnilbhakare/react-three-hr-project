import React, { useEffect } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const ListOfProducts = ({ products, onDelete }) => {
  let total = 0;

  for (const product of products) {
    parseFloat((total += product.price));
  }

  return (
    <div>
      <Card>
        <h1>Products</h1>

        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
              <Button
                type="submit"
                id={product.id}
                onClick={() => onDelete(product.id)}
              >
                Delete Product
              </Button>
            </li>
          ))}
        </ul>
        <h2> Total Value worth of Products:</h2>
        <span> Rs {parseFloat(total)}</span>
      </Card>
    </div>
  );
};

export default ListOfProducts;
