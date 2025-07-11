import { useState } from "react";
import Text from "../Text/Text";
import Button from "../Button";

// Funcion de validacion
// recibe el objeto formData y devuelve un objeto con los errores
const validateForm = (formData) => {
  const errors = {}; //almacena todos los errores

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //valida formato de email

  // objeto de validaciones por campo
  // las propiedades representan un cmpo y el val es una funcion que recibe el valor
  const validations = {
    name: (val) => (val.trim() ? "" : "El nombre es obligatorio."),
    lastName: (val) => (val.trim() ? "" : "El apellido es obligatorio."),
    email: (val) => {
      if (!val.trim()) return "El correo es obligatorio.";
      if (!emailRegex.test(val)) return "El formato del correo no es válido.";
      return "";
    },
    password: (val) => {
      if (!val.trim()) return "La contraseña es obligatoria.";
      if (val.length < 6) return "Debe tener al menos 6 caracteres.";
      return "";
    },
  };

  // bucle for in
  //recorro cada campo del objeto validations
  // field variable que toma en cada vuelta el nombre del campo
  // validator, toma la funcion de validacion que le corresponde al campo
  // error, guarda el mensaje de error que devuelve la funcion

  for (const field in validations) {
    const value = formData[field];
    const validator = validations[field];
    const error = validator(value);

    if (error) {
      errors[field] = error; //guarda el error bajo el nombre del campo actual
    }
  }

  return errors;
};

// componente del formulario de registro
function RegisterForm({ onClose }) {
  //estado que guarda lo que el usuario escribe
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  //estado que guarda los errores por cada campo
  const [errors, setErrors] = useState({});

  //actualiza el campo cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
  };

  // Valida todo y muestra errores si hay errores
  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se recargue la página

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // muestra errores si hay
      return;
    }

    // Si todo está bien, limpiamos errores
    setErrors({});

    // Acá iría el fetch o submit real
    console.log("Registro exitoso:", formData);

    // Cerramos el formulario si se pasa desde Login
    if (onClose) onClose(); //si la funcion onClose fue pasada como prop se ejecuta, sino no
  };

  //Agrega clase si hay error en ese campo
  const inputClass = (field) => {
    return `auth__input ${errors[field] ? "auth__input--error" : ""}`;
  };
  
  return (
    <div className="register__panel">
      <form className="register__form" onSubmit={handleSubmit}>
        {/* Botón de cierre arriba a la derecha */}
        <button
          type="button"
          className="register__close-button"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Título centrado */}
        <Text
          as="h2"
          className="title title--primary register__title"
          text="Registrarse"
        />

        {/* Grupo de inputs */}
        <div className="auth__form-group">
          <div className="auth__form-field">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              className={inputClass("name")}
            />
            <Text as="span" text={errors.name} className="auth__error" />
          </div>

          <div className="auth__form-field">
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
              onFocus={() => handleFocus("lastName")}
              className={inputClass("lastName")}
            />
            <Text as="span" text={errors.lastName} className="auth__error" />
          </div>

          <div className="auth__form-field">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              className={inputClass("email")}
            />
            <Text as="span" text={errors.email} className="auth__error" />
          </div>

          <div className="auth__form-field">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleFocus("password")}
              className={inputClass("password")}
            />
            <Text as="span" text={errors.password} className="auth__error" />
          </div>
        </div>

        {/* Botón de envío */}
        <div className="auth__button-container">
          <Button
            type="submit"
            color="primary"
            variant="solid"
            label="Registrarse"
          />
        </div>

        {/* Texto con acceso a login */}
        <Text
          as="p"
          className="auth__register-text"
          text={
            <>
              Ya tengo cuenta,{" "}
              <span className="auth__register-link" onClick={onClose}>
                ingresar
              </span>
            </>
          }
        />
      </form>
    </div>
  );
}

export default RegisterForm;
