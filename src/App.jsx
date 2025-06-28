import UnityPlayer from "./components/UnityPlayer";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr", // El centro (simulador) ahora es más ancho
        alignItems: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      {/* Controles izquierdo */}
      <div style={{ textAlign: "center" }}>
        <h2><strong>Controles<br />izquierdos</strong></h2>
      </div>

      {/* Simulador centrado y ancho */}
      <div
        style={{
          height: "90vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <UnityPlayer />
        </div>
      </div>

      {/* Controles derecho */}
      <div style={{ textAlign: "center" }}>
        <h2><strong>Controles<br />derechos</strong></h2>
      </div>
    </div>
  );
}

export default App;
