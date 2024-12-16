// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductItem";

function App() {
  const [products, setProducts] = useState([

    { name: "Laptop", price: 1000 },
    { name: "Phone ", price: 500 },
    { name: "Headphones", price: 150 },
  ]);

  
  const addProduct = (productData) => {
    setProducts([...products, productData]);
  };


const increasePrice = (index) => {
  const newProducts = [...products];
  newProducts[index].price = Number(newProducts[index].price) + 50;
  setProducts(newProducts);
};


const deleteProduct = (index) => {
  const newProducts = products.filter((_, i) => i !== index);
  setProducts(newProducts);
};

  return (
    <div className="App">
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        increasePrice={increasePrice}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default App;
