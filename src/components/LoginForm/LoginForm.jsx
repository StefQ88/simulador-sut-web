// src/components/LoginForm/LoginForm.jsx

import { useState } from "react";
import Text from "../Text/Text";

function LoginForm() {
  // Estado local que guarda los valores del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Estado para mostrar errores de validacion
  const [error, setError] = useState("");

  // Maneja los cambios de los inputs (email y password)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev, //conserva los valores anteriores
      [name]: value, //solo actualiza el campo que cambio
    }));
  };

  // Funcion que maneja el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //evita que el formulario recargue la pagina al enviarse

    if (!formData.email || !formData.password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // si todos los campos tienen datos, borramos el mensaje de error
    setError("");
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
        <h2 className="login__system-title">
          Simulador <span className="login__system-title--bold">SUT</span>
        </h2>


          <form className="login__form">
            <div className="login__form-group">
              <input
                type="email"
                placeholder="Ingresá tu correo"
                className="login__input"
              />
              <input
                type="password"
                placeholder="Ingresá tu contraseña"
                className="login__input"
              />
            </div>
            <button type="submit" className="login__button">
              Ingresar
            </button>
          </form>
        

        {error && <p className="login__error">{error}</p>}
      </div>
    </div>
  );
}

export default LoginForm;
