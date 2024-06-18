import React, { useState, useEffect } from 'react';
import { Button, FormControl, Form, Modal, Card, Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navbar';
import './css/depa.css';

const AreaForm = ({ nuevaArea, handleInputChange, agregarArea }) => (
  <Form>
    <Form.Group controlId="formDepartamento">
      <Form.Label>Departamento</Form.Label>
      <FormControl
        type="text"
        name="departamento"
        value={nuevaArea.departamento}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="formAreas">
      <Form.Label>Áreas</Form.Label>
      <FormControl
        type="text"
        name="areas"
        value={nuevaArea.areas}
        onChange={handleInputChange}
        placeholder="Separar áreas con comas"
      />
    </Form.Group>
  </Form>
);

const AreasTrabajo = () => {
  const [areas, setAreas] = useState([]);
  const [nuevaArea, setNuevaArea] = useState({ departamento: '', areas: '' });
  const [mostrarFormularioArea, setMostrarFormularioArea] = useState(false);
  const [areaSeleccionadaId, setAreaSeleccionadaId] = useState(null);
  const [valoresAreaSeleccionada, setValoresAreaSeleccionada] = useState({ departamento: '', areas: '' });
  const [mostrarModalActualizar, setMostrarModalActualizar] = useState(false);
  const [filtroArea, setFiltroArea] = useState('');
  const [expandedArea] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/areas`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de áreas');
        }
        const data = await response.json();
        setAreas(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAreas();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaArea((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const agregarArea = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/areas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...nuevaArea,
          areas: nuevaArea.areas.split(',').map(area => area.trim())
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo agregar el área');
      }

      const data = await response.json();
      setAreas([...areas, data]);
      setNuevaArea({ departamento: '', areas: '' });
      setMostrarFormularioArea(false);
    } catch (error) {
      console.error('Error al agregar el área:', error);
    }
  };

  const eliminarArea = async (areaId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/areas/${areaId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('No se pudo eliminar el área');
      }
      const nuevasAreas = areas.filter((area) => area._id !== areaId);
      setAreas(nuevasAreas);
    } catch (error) {
      console.error(error);
    }
  };

  const abrirModalActualizar = (areaId) => {
    setAreaSeleccionadaId(areaId);
    const areaSeleccionada = areas.find(area => area._id === areaId);
    setValoresAreaSeleccionada(areaSeleccionada);
    setMostrarModalActualizar(true);
  };

  const cerrarModalActualizar = () => {
    setMostrarModalActualizar(false);
  };

  const actualizarArea = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/areas/${areaSeleccionadaId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...valoresAreaSeleccionada,
            areas: valoresAreaSeleccionada.areas.split(',').map(area => area.trim())
          }),
        }
      );
      if (!response.ok) {
        throw new Error('No se pudo actualizar el área');
      }
      const data = await response.json();
      const index = areas.findIndex((a) => a._id === areaSeleccionadaId);
      const nuevasAreas = [...areas];
      nuevasAreas[index] = data;
      setAreas(nuevasAreas);
      cerrarModalActualizar();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navigation />
      <h2 className="titulo">Gestión de Departamentos y Áreas</h2>
      <div className="contenedor">
        <div className="boton-container">
          <Button
            variant="success"
            className="boton-verde"
            onClick={() => setMostrarFormularioArea(true)}
          >
            Agregar Departamento
          </Button>{' '}
          <FormControl
            type="text"
            placeholder="Filtrar Departamentos"
            value={filtroArea}
            onChange={(e) => setFiltroArea(e.target.value)}
          />
        </div>
        <Row xs={1} md={4} lg={5} className="g-4"> {/* Aquí defines que habrá 4 columnas en dispositivos extra pequeños (xs), 4 columnas en dispositivos medianos (md) y 5 columnas en dispositivos grandes (lg) */}
          {areas
            .filter((area) =>
              area.departamento.toLowerCase().includes(filtroArea.toLowerCase())
            )
            .map((area) => (
              <Col key={area._id}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{area.departamento}</Card.Title>
                    <Card.Text>
                      <strong>Áreas:</strong> {area.areas.join(', ')}
                    </Card.Text>
                    <Button
                      variant="warning"
                      onClick={() => abrirModalActualizar(area._id)}
                    >
                      Actualizar
                    </Button>{' '}
                    <Button
                      variant="danger"
                      onClick={() => eliminarArea(area._id)}
                    >
                      Eliminar
                    </Button>
                   
                    {expandedArea === area._id && (
                      <Card.Text>
                        <strong>Descripción:</strong> {area.descripcion}
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
      <Modal show={mostrarFormularioArea} onHide={() => setMostrarFormularioArea(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Departamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AreaForm
            nuevaArea={nuevaArea}
            handleInputChange={handleInputChange}
            agregarArea={agregarArea}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarFormularioArea(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={agregarArea}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={mostrarModalActualizar} onHide={cerrarModalActualizar}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Departamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formActualizarDepartamento">
              <Form.Label>Departamento</Form.Label>
              <FormControl
                type="text"
                name="departamento"
                value={valoresAreaSeleccionada.departamento}
                onChange={(e) =>
                  setValoresAreaSeleccionada({
                    ...valoresAreaSeleccionada,
                    departamento: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formActualizarAreas">
              <Form.Label>Áreas</Form.Label>
              <FormControl
                type="text"
                name="areas"
                value={valoresAreaSeleccionada.areas}
                onChange={(e) =>
                  setValoresAreaSeleccionada({
                    ...valoresAreaSeleccionada,
                    areas: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModalActualizar}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={actualizarArea}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AreasTrabajo;
