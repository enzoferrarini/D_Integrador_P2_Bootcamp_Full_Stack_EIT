import { Link } from "react-router-dom";
import carritoImage from "../img/other/carrito.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
import CartProducts from "../components/CartProducts";

const NavBar = () => {
  const { productCartList } = useContext(CartContext);
  const [showModalCart, setShowModalCart] = useState(false);

  const closeModal = () => {
    setShowModalCart(false);
    console.log("EN NAVBAR " + showModalCart);
  };

  useEffect(() => {
    if (productCartList.length === 0) {
      setShowModalCart(false);
    }
  }, [productCartList, showModalCart]);

  return (
    <>
      <nav className="nav__bar">
        <Link to="/">
          <p id="idTitle">Juguetería Cósmica</p>
        </Link>
        <div className="nav__links">
          <div className="nav__bar-horizontal">
            <Link to="/addProduct">Alta de Productos</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/us">Nosotros</Link>
          </div>
          <div className="carrito" onClick={() => setShowModalCart(true)}>
            <div className="p__relative">
              <img
                src={carritoImage}
                alt="Carrito"
                className="carrito__image"
              />
              {productCartList.length ? (
                <>
                  <Modal
                    showModal={showModalCart}
                    onClose={() => closeModal()}
                    title="Productos añadidos"
                  >
                    <CartProducts />
                  </Modal>
                  <div className="circle__cart">
                    {productCartList.reduce(
                      (acumulado, product) => acumulado + product.cant,
                      0
                    )}
                  </div>
                </>
              ) : undefined}
            </div>
          </div>
          <div className="dropdown m__lr z__behind">
            <button>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="dropdown__content">
              <a href="pages/addProduct.html">Alta de Productos</a>
              <a href="pages/contact.html">Contacto</a>
              <a href="pages/us.html">Nosotros</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
