import React from "react";
import Counter from "./Counter";

const ProductCard = ({ p }) => {
  return (
    <>
      <div className="card">
        <div className="header__card">
          <img src={p.imgUrl} alt={`Imagen ${p.nombre}`} />
        </div>
        <div className="body__card">
          <p className="titulo__card">{p.nombre}</p>
          <p className="desc__card">
            <strong>Descripcion Corta:</strong> {p.descripcionCorta}
          </p>
          <p className="card__price">${p.precio}</p>
        </div>
        <div className="footer__card">
          <Counter p={p} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
