// src/components/Programas.jsx
import React, { useState } from "react";
import axios from "axios";
import './css/Programa.css';
import Navigation from "../Navigation/Navbar";

const Programas = () => {
  const [nombre, setNombre] = useState("");
  const [requisitos, setRequisitos] = useState([""]);
  const [file, setFile] = useState(null);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleRequisitoChange = (index, value) => {
    const newRequisitos = [...requisitos];
    newRequisitos[index] = value;
    setRequisitos(newRequisitos);
  };

  const handleAddRequisito = () => {
    setRequisitos([...requisitos, ""]);
  };

  const handleRemoveRequisito = (index) => {
    const newRequisitos = requisitos.filter((_, i) => i !== index);
    setRequisitos(newRequisitos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/programas`, {
        Nombre: nombre,
        Descripcion: requisitos
      });
      alert("Guardado con éxito");
      console.log('Programa creado:', response.data);
      setNombre('');
      setRequisitos([""]);
    } catch (error) {
      console.error('Error al crear el programa:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/programas/carga-masiva`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Archivo cargado con éxito");
      console.log('Respuesta de carga masiva:', response.data);
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
    }
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <Navigation />
      </div>
      <div className="programas-container">
        <h1>Crear Programa</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Programa:</label>
            <input
              type="text"
              value={nombre}
              onChange={handleNombreChange}
              required
            />
          </div>
          {requisitos.map((requisito, index) => (
            <div key={index}>
              <label>Requisito {index + 1}:</label>
              <textarea
                value={requisito}
                onChange={(e) => handleRequisitoChange(index, e.target.value)}
                required
              />
              <button type="button" onClick={() => handleRemoveRequisito(index)}>Cancelar</button>
            </div>
          ))}
          <button type="button" onClick={handleAddRequisito}>Agregar Requisito</button>
          <button type="submit">Crear Programa</button>
        </form>
        <h2>Carga Masiva</h2>
        <form onSubmit={handleFileUpload}>
          <input type="file" onChange={handleFileChange} accept=".xlsx" required />
          <button type="submit">Cargar Archivo</button>
        </form>
      </div>
    </div>
  );
};

export default Programas;
