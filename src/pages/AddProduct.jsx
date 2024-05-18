import React from "react";
import FormLayout from "../layout/FormLayout";
import { postProducts } from "../util/api";
import {
  validateName,
  validatePrice,
  validateStock,
  validateMarca,
  validateDescCorta,
  validateCategoria,
  validateEdadDesde,
  validateEdadHasta,
} from "../util/addProductValidations";

const INITIAL_STATE = {
  nombre: "",
  precio: 0,
  stock: "0",
  edadDesde: "0",
  edadHasta: "0",
  marca: "",
  categoria: "",
  descripcionCorta: "",
  descripcionLarga: "",
  imgUrl:
    "https://media.istockphoto.com/id/1070162802/es/vector/leksaker.jpg?s=612x612&w=0&k=20&c=zfz59Me6arLf6rR29N1TchDkKibEw1xRjxdy2XmRAXg=",
};

function AddProduct() {
  const inputProps = {
    nombre: {
      inputLabel: "Nombre (*)",
      placeholder: "Ingrese nombre del producto",
      validation: validateName,
    },
    precio: {
      inputLabel: "Precio (*)",
      inputType: "text",
      validation: validatePrice,
    },
    stock: {
      inputLabel: "Stock (*)",
      inputType: "number",
      validation: validateStock,
    },
    marca: {
      inputLabel: "Marca (*)",
      placeholder: "Ingrese marca",
      validation: validateMarca,
    },
    categoria: {
      inputLabel: "Categoria (*)",
      placeholder: "Ingrese categoría",
      validation: validateCategoria,
    },
    descripcionCorta: {
      inputLabel: "Descripción Corta (*)",
      validation: validateDescCorta,
      placeholder: "Ingrese descripción corta",
    },
    descripcionLarga: {
      inputLabel: "Descripción Larga",
      inputType: "textarea",
      placeholder: "Ingrese descripción completa",
    },
    edadDesde: {
      inputLabel: "Edad Desde (*)",
      inputType: "number",
      validation: validateEdadDesde,
    },
    edadHasta: {
      inputLabel: "Edad Hasta (*)",
      inputType: "number",
      validation: validateEdadHasta,
    },
    envioGratis: {
      inputLabel: "Envio Gratis",
      inputType: "checkbox",
    },
    imgUrl: {
      inputLabel: "Imagen del producto",
      inputType: "file",
    },
  };

  return (
    <section>
      <div className="form__container">
        <FormLayout
          title="Nuevo Producto"
          inputProps={inputProps}
          onSubmit={postProducts}
          labelSubmit="Agregar Producto"
          initialState={INITIAL_STATE}
          msgOK="Producto agregado correctamente..."
        />
      </div>
    </section>
  );
}

export default AddProduct;
