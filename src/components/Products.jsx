import React, { useEffect, useState } from "react";
import { getProducts } from "../util/api.js";
import ProductCard from "./ProductCard.jsx";

const Productos = ({ productos }) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoadingProducts(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="destacados">
        {loadingProducts ? (
          <div>
            <h1>Cargando</h1>
          </div>
        ) : (
          <>
            {products.map((product) => (
              <ProductCard key={product.id} p={product} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Productos;
