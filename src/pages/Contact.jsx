import React from "react";
import FormLayout from "../layout/FormLayout";

import {
  validateName,
  validateMail,
  validateComentarios,
} from "../util/sendComments";

const INITIAL_STATE = {
  nombre: "",
  email: "",
  comentarios: "",
};

function Contact() {
  const inputProps = {
    nombre: {
      inputLabel: "Nombre (*)",
      placeholder: "Ingrese nombre y apellido",
      validation: validateName,
    },
    email: {
      inputLabel: "E-mail (*)",
      placeholder: "Ingrese su email",
      validation: validateMail,
    },
    comentarios: {
      inputLabel: "Comentarios (*)",
      placeholder: "Ingrese comentarios",
      inputType: "textarea",
      validation: validateComentarios,
    },
  };

  const sendComentarios = () => {
    return new Promise((resolve, reject) => {
      // Simulamos una operación asincrónica usando setTimeout
      setTimeout(() => {
        const result = { message: "Comentarios enviados correctamente" };
        resolve(result);
      }, 1000); // Simulamos un retraso de 1 segundo
    });
  };

  return (
    <section>
      <div className="form__container">
        <FormLayout
          title="Contacto"
          inputProps={inputProps}
          onSubmit={sendComentarios}
          labelSubmit="Enviar Comentarios"
          msgOK="Mensaje enviado correctamente..."
          initialState={INITIAL_STATE}
        />
      </div>
    </section>
  );
}

export default Contact;
