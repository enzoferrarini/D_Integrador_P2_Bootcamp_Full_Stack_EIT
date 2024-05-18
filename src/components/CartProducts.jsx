import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

const CartProducts = () => {
  const { productCartList } = useContext(CartContext);

  return (
    <div className=" d__flex w__100 f__column">
      <table className="w__100">
        <thead>
          <tr>
            <th>Producto</th>
            <th>P. Unit.</th>
            <th>SubTotal</th>
            <th>Cant</th>
          </tr>
        </thead>
        <tbody>
          {productCartList.map((product) => (
            <CartProduct key={product.id} p={product} />
          ))}
          <tr>
            <th colSpan={2}>Total</th>
            <th>
              $
              {parseFloat(
                productCartList.reduce(
                  (acc, product) => acc + product.precio * product.cant,
                  0
                )
              ).toFixed(2)}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartProducts;
