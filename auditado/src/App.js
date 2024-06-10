// App.js
import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/loginForm" 
import Inicio from './Components/Home/inicio';
import AuthProvider from './AuthProvider';



export const UserContext = createContext(null);

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {}
          <Route path="/home" element={<Inicio/>}/> {}
        </Routes>
      </Router>
    </div>
  </AuthProvider>
  );
}

export default App;
