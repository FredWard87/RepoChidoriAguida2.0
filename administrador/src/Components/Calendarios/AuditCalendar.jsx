import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import Navigation from '../Navigation/Navbar';
import './css/AuditCalendar.css';

const AuditCalendar = () => {
  const [auditorias, setAuditorias] = useState([]);
  const [selectedAudits, setSelectedAudits] = useState([]);
  const [filters, setFilters] = useState({
    auditorLider: '',
    tipoAuditoria: '',
    departamento: '',
    aceptibilidad: '' // Añadimos el nuevo filtro
  });

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

  useEffect(() => {
    const filteredAudits = auditorias.filter(audit => audit.Estado === 'Realizada');
    setSelectedAudits(filteredAudits);
  }, [auditorias]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const getFilteredAudits = () => {
    return selectedAudits.filter(audit => {
      const acceptability = getAcceptability(audit.PorcentajeTotal);
      return (
        (filters.auditorLider === '' || audit.AuditorLider === filters.auditorLider) &&
        (filters.tipoAuditoria === '' || audit.TipoAuditoria === filters.tipoAuditoria) &&
        (filters.departamento === '' || audit.Departamento === filters.departamento) &&
        (filters.aceptibilidad === '' || acceptability === filters.aceptibilidad)
      );
    });
  };

  const getAcceptability = (percentage) => {
    if (percentage < 70) {
      return 'Rechazado';
    } else if (percentage < 80) {
      return 'No Aceptable';
    } else if (percentage < 90) {
      return 'Aceptable';
    } else {
      return 'Excelente';
    }
  };

  return (
    <Container className="audit-calendar-container">
      <Navigation />
      <br />
      <br />
      <br />
      <br />
      <Box className="audit-details-container">
        <Typography variant="h4" gutterBottom>
          Detalles de las Auditorías Terminadas
        </Typography>

        {/* Filtros */}
        <Box className="filters-container">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Auditor Líder</InputLabel>
                <Select
                  name="auditorLider"
                  value={filters.auditorLider}
                  onChange={handleFilterChange}
                  label="Auditor Líder"
                >
                  <MenuItem value="">Todos</MenuItem>
                  {[...new Set(auditorias.map(audit => audit.AuditorLider))].map((auditorLider, index) => (
                    <MenuItem key={index} value={auditorLider}>
                      {auditorLider}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Tipo de Auditoría</InputLabel>
                <Select
                  name="tipoAuditoria"
                  value={filters.tipoAuditoria}
                  onChange={handleFilterChange}
                  label="Tipo de Auditoría"
                >
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="Interna">Interna</MenuItem>
                  <MenuItem value="Externa">Externa</MenuItem>
                  <MenuItem value="Responsabilidad Social">Responsabilidad Social</MenuItem>
                  <MenuItem value="FSSC 22000">FSSC 22000</MenuItem>
                  <MenuItem value="Inspección de autoridades">Inspección de autoridades</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Departamento</InputLabel>
                <Select
                  name="departamento"
                  value={filters.departamento}
                  onChange={handleFilterChange}
                  label="Departamento"
                >
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="Administración">Administración</MenuItem>
                  <MenuItem value="Aseguramiento de calidad">Aseguramiento de calidad</MenuItem>
                  <MenuItem value="Gestión para la calidad">Gestión para la calidad</MenuItem>
                  <MenuItem value="Gestión para la productividad">Gestión para la productividad</MenuItem>
                  <MenuItem value="Ingeniería">Ingeniería</MenuItem>
                  <MenuItem value="Mantenimiento">Mantenimiento</MenuItem>
                  <MenuItem value="Planeación y Logística">Planeación y Logística</MenuItem>
                  <MenuItem value="Producción">Producción</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Aceptibilidad</InputLabel>
                <Select
                  name="aceptibilidad"
                  value={filters.aceptibilidad}
                  onChange={handleFilterChange}
                  label="Aceptibilidad"
                >
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="Rechazado">Rechazado</MenuItem>
                  <MenuItem value="No Aceptable">No Aceptable</MenuItem>
                  <MenuItem value="Aceptable">Aceptable</MenuItem>
                  <MenuItem value="Excelente">Excelente</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Table className="audit-table">
          <TableHead>
            <TableRow>
              <TableCell>Tipo de Auditoría</TableCell>
              <TableCell>Duración</TableCell>
              <TableCell>Departamento</TableCell>
              <TableCell>Área Auditada</TableCell>
              <TableCell>Auditado por</TableCell>
              <TableCell>Equipo Auditor</TableCell>
              <TableCell>Observador</TableCell>
              <TableCell>Porcentaje Obtenido</TableCell>
              <TableCell>Aceptibilidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getFilteredAudits().map((audit, index) => (
              <TableRow key={index}>
                <TableCell>{audit.TipoAuditoria}</TableCell>
                <TableCell>{audit.Duracion}</TableCell>
                <TableCell>{audit.Departamento}</TableCell>
                <TableCell>{audit.AreasAudi}</TableCell>
                <TableCell>{audit.AuditorLider}</TableCell>
                <TableCell>
                  {audit.EquipoAuditor && audit.EquipoAuditor.length > 0 ? (
                    <ul>
                      {audit.EquipoAuditor.map((miembro, miembroIndex) => (
                        <li key={miembroIndex}>{miembro.Nombre} - {miembro.Correo}</li>
                      ))}
                    </ul>
                  ) : (
                    'No cuenta con equipo auditor'
                  )}
                </TableCell>
                <TableCell>{audit.Observador ? 'Sí' : 'No'}</TableCell>
                <TableCell>{audit.PorcentajeTotal}</TableCell>
                <TableCell>{getAcceptability(audit.PorcentajeTotal)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default AuditCalendar;
