import React from "react";

//Props:
// - isOpen: booleano que controla si el modal se muestra
// - onClose: función para cerrar el modal
// - position: "right" (panel deslizante) o "center" (modal centrado)
// - children: el contenido personalizado que se muestra dentro

function Modal({ isOpen, onClose, position = "center", children }) {
  if (!isOpen) return null;

  return (
    //capa fondo oscuro
    //se aplica clase modificadora segun la posicion
    <div
      className={`modal modal--${position}`}
      onClick={onClose} // Previene que un click interno cierre el modal
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        {/* Botón de cierre (X) */}
        <button className="modal__close" onClick={onClose}>
          &times
        </button>

        {/* Contenido dinámico*/}
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
