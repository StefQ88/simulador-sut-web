// src/components/LoginForm/LoginForm.jsx

import { useState } from "react";
import Text from "../Text/Text";
import Button from "../Button";


function LoginForm() {
  // Estado local que guarda los valores del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Estado para mostrar errores de validacion
  const [errors, setError] = useState({
    email: "",
    password: "",
  });

  // Maneja los cambios de los inputs (email y password)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev, //conserva los valores anteriores
      [name]: value, //solo actualiza el campo que cambio
    }));
  };

  // se ejecuta para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //evita que el formulario recargue la pagina al enviarse

    const emailTrimed = formData.email.trim();
    const passwordTrimed = formData.password.trim();

    const newErrors = {
      email: "",
      password: "",
    };

    if (!emailTrimed) {
      newErrors.email = "El correo es obligatorio.";
    }

    if (!passwordTrimed) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (passwordTrimed.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (newErrors.email || newErrors.password) {
      setError(newErrors);
      return;
    }

    setError({
      email: "",
      password: "",
    });
  };

  const handleFocus = () => {
    setError({
      email: "",
      password: "",
    });
  };

  // ej enviar los datos a un servidor con fetch o axios
  // console.log("Datos enviados:", formData);

  return (
    <div className="login">
      {/* IZQUIERDA */}
      <div className="login__image-section">
        <div className="login__image-content">
          <Text as="h1" text="Bienvenido" className="login__image-title" />
          <Text
            as="h2"
            text="Preparate para el campo real"
            className="login__image-subtitle"
          />
          <Text
            as="p"
            text="Simulá escenarios agrícolas, analizá resultados y avanzá con cada desafío"
            className="login__image-description"
          />
        </div>
      </div>

      {/* DERECHA */}
      <div className="login__form-section">
        <div className="login__form-body">
          <div className="login__title-wrapper">
            <Text as="h2" className="title title--primary">
              <span className="title__bold">
                Simulador <span>SUT</span>
              </span>
            </Text>
          </div>

          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__form-group">
              <div className="login__form-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="true"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  placeholder="Ingresá tu correo"
                  className={`login__input ${
                    errors.email ? "login__input--error" : ""
                  }`}
                />
                <Text
                  as="span"
                  text={errors.email}
                  className="login__error"
                />
              </div>

              <div className="login__form-field">
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="true"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus("password")}
                  placeholder="Ingresá tu contraseña"
                  className={`login__input ${
                    errors.password ? "login__input--error" : ""
                  }`}
                />
                <Text
                  as="span"
                  text={errors.password}
                  className="login__error"
                />
              </div>
            </div>
            <div className="login__button-container">
              <Button
                type="submit"
                color="primary"
                variant="solid"
                label="Iniciar sesión"
                className="login__button "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
