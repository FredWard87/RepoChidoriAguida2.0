import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Navigation from '../Navigation/Navbar';
import './css/inicio.css';

const Inicio = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <Navigation />
      <div className="inicio-container">
        <div className="inicio-content">
          <h1>Bienvenido</h1>
          {userData && (
            <div className="user-info">
              <p className="user-name">Nombre: {userData.Nombre}</p>
              <p className="user-email">Correo: {userData.Correo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
