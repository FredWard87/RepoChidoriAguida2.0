import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './css/auditoria.css';
import Navigation from '../Navigation/Navbar'; // Importa tu Navbar

const AuditCalendar = () => {
  const [auditorias, setAuditorias] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedAudits, setSelectedAudits] = useState([]);

  useEffect(() => {
    const fetchAuditorias = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/datos`);
        setAuditorias(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAuditorias();
  }, []);

  const onDateChange = (date) => {
    setDate(date);
    const audits = auditorias.filter(a => new Date(a.FechaElaboracion).toDateString() === date.toDateString());
    setSelectedAudits(audits);
  };

  const getPercentageClass = (percentage) => {
    if (percentage < 80) {
      return 'red';
    } else if (percentage < 90) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  return (
    <>
      <Navigation /> {/* Añade la Navbar aquí */}
      <Container className="audit-calendar-container">
        <Box className="calendar-container">
          <Calendar
            onChange={onDateChange}
            value={date}
          />
        </Box>
        <Box className="audit-details-container">
          {selectedAudits.length > 0 ? (
            <>
              <Typography variant="h4" gutterBottom>
                Detalles de las Auditorías Terminadas
              </Typography>
              {selectedAudits.map((audit, index) => (
                <Accordion key={index} className="audit-accordion">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    <Typography variant="h6">
                      Auditoría {index + 1}: {audit.TipoAuditoria}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      <strong>Duración:</strong> {audit.Duracion}
                      <br />
                      <strong>Departamento:</strong> {audit.Departamento}
                      <br />
                      <strong>Área Auditada:</strong> {audit.AreasAudi}
                      <br />
                      <strong>Auditado por:</strong> {audit.AuditorLider}
                    </Typography>
                    {audit.EquipoAuditor && audit.EquipoAuditor.length > 0 && (
                      <div>
                        <Typography variant="body2">
                          <strong>Equipo Auditor:</strong>
                        </Typography>
                        <ul>
                          {audit.EquipoAuditor.map((miembro, miembroIndex) => (
                            <li key={miembroIndex}>{miembro.Nombre} - {miembro.Correo}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Typography variant="body2">
                      <strong>Observador:</strong> {audit.Observador ? 'Sí' : 'No'}
                      {audit.Observador && audit.NombresObservadores && (
                        <>
                          <br />
                          <strong>Nombres de los Observadores:</strong> {audit.NombresObservadores}
                        </>
                      )}
                      <br />
                      <strong className={getPercentageClass(audit.PorcentajeTotal)}>Porcentaje Obtenido:</strong> {audit.PorcentajeTotal}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </>
          ) : (
            <Box className="no-audits-message-card">
              <Typography variant="h4" className="no-audits-message">
                En este día no se han realizado ninguna auditoría, seleccione otro día.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default AuditCalendar;
