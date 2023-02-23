import "./styles.css"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Inicio from "./routes/Inicio";
import Contacto from "./routes/Contacto";
import QuienesSomos from "./routes/QuienesSomos"
import Servicio from "./routes/Servicio";




export default function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/quienes-somos" element={<QuienesSomos/>}/>
        <Route path="/servicio" element={<Servicio/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>

      
    </div>
  );
}
