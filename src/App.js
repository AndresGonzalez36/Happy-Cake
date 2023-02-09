import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarraNav from "./components/BarraNav.jsx";
import Contacto from "./views/Contacto.jsx";
import Home from "./views/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BarraNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
