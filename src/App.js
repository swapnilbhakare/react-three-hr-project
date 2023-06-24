import { useState, useEffect } from "react";
import "./App.css";
import AddProduct from "./Components/Products/AddProducts/AddProduct";
import ListOfProducts from "./Components/Products/ListProducts/ListOfProducts";

function App() {
  const [productList, SetProductList] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("productList");
    if (savedProducts) {
      SetProductList(JSON.parse(savedProducts));
    }
  }, []);

  // Save products to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

  const addProductHandler = (productId, prodcutPrice, productName) => {
    const newProduct = {
      id: productId,
      price: parseFloat(prodcutPrice),
      name: productName,
    };

    SetProductList([...productList, newProduct]);
  };

  const deleteProductHandler = (productId) => {
    const updatedProducts = productList.filter(
      (product) => product.id !== productId
    );

    SetProductList(updatedProducts);
  };

  return (
    <div className="App">
      <AddProduct onAddProduct={addProductHandler} />
      <ListOfProducts products={productList} onDelete={deleteProductHandler} />
    </div>
  );
}

export default App;
