import { useEffect, useRef } from "react";

export default function UnityPlayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/unity/Build/unity.loader.js";

    script.onload = () => {
      window
        .createUnityInstance(canvasRef.current, {
          dataUrl: "/unity/Build/unity.data",
          frameworkUrl: "/unity/Build/unity.framework.js",
          codeUrl: "/unity/Build/unity.wasm",
        })
        .catch((err) => console.error("Error cargando Unity:", err));
    };

    document.body.appendChild(script);
  }, []);

  return (
    <canvas
  id="unity-canvas"
  ref={canvasRef}
  style={{
    width: "100%",       // que se estire en su contenedor
    height: "100%",
    display: "block",
    maxWidth: "100%",    // que no se desborde
  }}
/>
  );
}
