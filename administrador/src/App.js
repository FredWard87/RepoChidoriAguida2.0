import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login/LoginForm';
import Inicio from './Components/Home/inicio';
import UsuariosRegis from './Components/UsuariosRegistrados/usuariosRegistro';
import Datos from './Components/DatosGenerales/Datos';
import Programas from './Components/ProgramasIn/Programa';
import AuthProvider from './authProvider';

export const UserContext = createContext(null);

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/datos" element={<Datos />} />
            <Route path="/programa" element={<Programas />} />
            <Route path="/home" element={<Inicio />} />
            <Route path="/usuariosRegistrados" element={<UsuariosRegis />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
