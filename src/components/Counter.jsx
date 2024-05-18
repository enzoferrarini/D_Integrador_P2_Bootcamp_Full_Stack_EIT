import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { StickyContext } from "../context/StickyContext";

const Counter = ({ p, initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const { productCartList, addProductToCartList, removeProductToCartList } =
    useContext(CartContext);

  const { openSticky } = useContext(StickyContext);

  useEffect(() => {
    const product = productCartList.find((product) => product.id === p.id);
    setCount(product?.cant || 0);
  }, [productCartList, p.id]);

  const addCount = () => {
    setCount(count + 1);
    addProductToCartList(p, count + 1);
    openSticky(
      "Producto agregado correctamente:",
      `${p.nombre} - Cantidad: ${p.cant}`
    );
  };

  const restCount = () => {
    if (count > 0) {
      setCount(count - 1);
      removeProductToCartList(p, count - 1);
    }
  };

  return (
    <div
    className="d__flex f__row ai__c jc__sb"
    >
      <button onClick={() => restCount()} disabled={count === 0}>
        -
      </button>
      <span className="p__lr">{count}</span>
      <button onClick={() => addCount()}>+</button>
    </div>
  );
};

export default Counter;
