import { useState } from "react";
import Text from "../Text/Text";
import Button from "../Button";

// FUNCION DE VALIDACION - Fuera del componente
// esta funcion recibe un objeto con "email" y "password"
// y devuelve un objeto con mensaje de error si no paso la validacion
const validateForm = ({ email, password }) => {
  const errors = {};

  const emailTrimed = email.trim();
  const passwordTrimed = password.trim();

  if (!emailTrimed) {
    errors.email = "El correo es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimed)) {
    errors.email = "El formato del correo no es válido.";
  }

  if (!passwordTrimed) {
    errors.password = "La contraseña es obligatoria.";
  } else if (passwordTrimed.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  return errors;
};

/*
Componente funcional LoginForm
1. Muestra la interfaz de login dividida en dos secciones
2. Gestiona el estado del formulario con useState
  - guarda lo que el usuario escribe (email, password)
  - muestra errores en caso de haber campos vacios o datos incorrectos
3. Valida datos al enviar
  - verifica que los campos no esten vacios
  - verifica que la contraseña tenga al menos 6 caracteres

*/
function LoginForm() {
  /*
  setFormData y setError son funciones que actualizan valores de los inputs
  y errores. 
  -formData guarda lo que el usuario escribe
  -errors guarda los mensajes de error que se deben mostrar
  */

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({
    email: "",
    password: "",
  });

  /*
  handleChange, se ejecuta cada vez que el usuario escribe en un campo
  -actualiza el estado formData
*/
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev, //conserva los valores anteriores
      [name]: value, //solo actualiza el campo que cambio
    }));
  };

  /*
  handleFocus, se ejecuta cada vez que el usuario hace foco en un input
  -limpia errores visuales para que desaparezcan mientras se escribe
  -recibe parametro (fieldName), string que es "email" o "password", es el campo del input
  -setError actualiza el estado de errores, recibe estado anterior y actualiza el estado actual
*/

  const handleFocus = (fieldName) => {
    setError((prevErrors) => ({
      ...prevErrors, //mantiene los errores que ya habia
      [fieldName]: "", //borra solo el del campo enfocado y sobreescribe el valor nuevo
    }));
  };

  /*
    handleSubmit(e), se ejecuta cuando se envia el formulario al hacer click en boton o enter
    - detiene el envio por defecto del navegador (e.preventDefault())
    - ejecuta la función externa de validación con los datos actuales del formulario
    - si hay errores, se muestra y salimos
    - si no hay errores, limpiamos cualquier error anterior
  */

  const handleSubmit = (e) => {
    e.preventDefault(); //evita que el formulario recargue la pagina al enviarse

    const validateErrors = validateForm(formData);

    if (Object.keys(validateErrors).length > 0) {
      setError(validateErrors); //actualiza el estado con los errores encontrados
      return; // corta la función, no continúa con envío de datos
    }

    setError({ email: "", password: "" });

    //se hacer un fetch o redirigir al usuario luego
    // console.log("Login válido:", formData);
  };

  /*
    inputClass, devuelve el nombre de la clase CSS
    - recibe un nombre de campo como "email" o "password"
    - revisa si hay un error en ese campo
    - si hay error agrega la clase "login__input--error"
    - si no hay error devuelve solo "login__input"
  */

  const inputClass = (fieldName) => {
    return `login__input ${errors[fieldName] ? "login__input--error" : ""}`;
  };

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
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  placeholder="Ingresá tu correo"
                  className={inputClass("email")}
                />
                <Text as="span" text={errors.email} className="login__error" />
              </div>

              <div className="login__form-field">
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus("password")}
                  placeholder="Ingresá tu contraseña"
                  className={inputClass("password")}
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
                type="submit" //dispara el envio del formulario al hacer clic
                color="primary"
                variant="solid"
                label="Iniciar sesión"
                className="login__button "
              />
            </div>

            <Text
              as="p"
              className="login__register-text"
              text={
                <>
                  ¿Aún no tenés cuenta?,{" "}
                  <a href="/register" className="login__register-link" >
                  Registrate</a>
                </>
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
