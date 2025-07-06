import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"; // tu navegación
// import Header from "../components/Header"; // si tenés un header

export default function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <Outlet /> {/* acá se insertan las pantallas: sala, módulos, etc */}
      </main>
    </div>
  );
}
