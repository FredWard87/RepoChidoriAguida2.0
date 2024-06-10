// App.js
import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/loginForm" // Importa el componente de inicio de sesión
import Inicio from './components/Home/inicio';
import AuthProvider from "./authProvider.jsx";

export const UserContext = createContext(null);


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Cambia la ruta raíz a la ruta de inicio de sesión */}

          <Route path="/home" element={<Inicio/>}/>
          
          {/* Agrega más rutas aquí si es necesario */}
        </Routes>
      </Router>
    </div>
    </AuthProvider>

  );
}

export default App;

