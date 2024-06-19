// App.js
import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Usuarios from "./Components/RegistroUsuarios/Usuarios";
import Login from "./Components/login/LoginForm"; // Importa el componente de inicio de sesión
import Inicio from './Components/Home/inicio';
import UsuariosRegis from './Components/UsuariosRegistrados/usuariosRegistro'; // Importa el componente UsuariosRegistrados
import Datos from './Components/DatosGenerales/Datos'
import Programas from './Components/ProgramasIn/Programa';
import Calendarioss from './Components/Calendarios/AuditCalendar'
import Calendarios from './Components/Calendarios/CalendarioGeneral'
import AuthProvider from './authProvider';
import Departamento from './Components/Departaments/departamento'
import Revicion from './Components/Reviciones/Revicion';
import Terminada from './Components/Terminadas/Terminada';

export const UserContext = createContext(null);

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/datos" element={<Datos/>}/>
          <Route path="/programa" element={<Programas/>}/>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/auditcalendar" element={<Calendarioss />} />
          <Route path="/calendario" element={<Calendarios />} />
          <Route path="/departaments" element={<Departamento />} />
          <Route path="/home" element={<Inicio/>}/>
          <Route path="/usuariosRegistrados" element={<UsuariosRegis />} /> 
          <Route path="/revicion" element={<Revicion />} /> 
          <Route path="/revicion" element={<Revicion />} /> 
          <Route path="/terminada" element={<Terminada />} />
        </Routes>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
