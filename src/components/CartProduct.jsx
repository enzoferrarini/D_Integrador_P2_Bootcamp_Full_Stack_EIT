import React from "react";
import Counter from "./Counter";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const CartProduct = ({ p }) => {
  return (
    <tr>
      <td className="b__bottom--grey">
        <div className="w__100 d__flex ai__c">
          <img src={p.imgUrl} alt={`Imagen ${p.nombre}`} />
          <div>{p.nombre}</div>
        </div>
      </td>
      <td className="b__bottom--grey">${parseFloat(p.precio).toFixed(2)}</td>
      <td className="b__bottom--grey">
        <strong>${parseFloat(p.cant * p.precio).toFixed(2)}</strong>
      </td>
      <td className="b__bottom--grey w__130">
        <Counter p={p} initialValue={p.cant} />
      </td>
    </tr>
  );
};

export default CartProduct;
