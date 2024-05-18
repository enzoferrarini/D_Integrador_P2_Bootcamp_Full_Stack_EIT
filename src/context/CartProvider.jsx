import React, { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [productCartList, setProductCartList] = useState([]);

  const addProductToCartList = (aProduct, countProduct) => {
    aProduct["cant"] = countProduct;
    const productSearchIndex = productCartList.findIndex(
      (product) => product.id === aProduct.id
    );

    if (productSearchIndex !== -1) {
      setProductCartList(
        productCartList.map((product) =>
          product.id === aProduct.id ? aProduct : product
        )
      );
    } else {
      setProductCartList([...productCartList, aProduct]);
    }
  };

  const removeProductToCartList = (aProduct, countProduct) => {
    const productFinded = productCartList.find(
      (product) => product.id === aProduct.id
    );
    if (productFinded?.cant > 1) {
      setProductCartList(
        productCartList.map((product) =>
          product.id === aProduct.id
            ? {
                ...product,
                cant: countProduct,
              }
            : product
        )
      );
    } else {
      setProductCartList(
        productCartList.filter((product) => product.id !== aProduct.id)
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addProductToCartList,
        removeProductToCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
