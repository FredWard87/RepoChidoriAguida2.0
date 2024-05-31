import React from 'react';
import './css/calificaciones.css';

const EvaluationTable = () => {
  return (
    <div className="evaluation-container">
      <table className="evaluation-table">
        <thead>
          <tr>
            <th colSpan="6">ENVASADORA AGUIDA - EVALUACIÓN DE AUDITORES INTERNOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2"><strong>NOMBRE:</strong> Laura Julieta Álvarez Hernández</td>
            <td><strong>FECHA:</strong> 30/05/2024</td>
            <td colSpan="2"><strong>CALIFICACIÓN:</strong> 40%</td>
          </tr>
          <tr>
            <td colSpan="2"><strong>FECHA DE INGRESO:</strong> lunes, 1 de abril de 2002</td>
            <td colSpan="3"></td>
          </tr>
          <tr className="section-header">
            <td colSpan="6">EXPERIENCIA: Se evaluará el tiempo que lleva laborando dentro de la planta, así como su participación en el SGCI y en auditorías anteriores.</td>
          </tr>
          <tr>
            <td colSpan="4">Menos de dos años (1 punto)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">2-5 años (4 puntos)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Más de 5 años (5 puntos)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Forma parte del equipo de inocuidad (2 puntos)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Participar en auditorías internas ≥ 4 (3 pts), 3 (2 pts), ≤ 2 (1 punto)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr className="section-header">
            <td colSpan="6">CAPACITACIÓN: El evaluado deberá tener como mínimo los siguientes cursos de capacitación.</td>
          </tr>
          <tr>
            <td colSpan="3">NOMBRE DEL CURSO</td>
            <td>Aprobado</td>
            <td>Calificación Obtenida</td>
            <td>Puntuación</td>
          </tr>
          <tr>
            <td colSpan="3">Auditor interno en un SGI (80% mínimo)</td>
            <td>Sí</td>
            <td>90.6</td>
            <td>1</td>
          </tr>
          <tr>
            <td colSpan="3">BPM´s (80% mínimo)</td>
            <td>Sí</td>
            <td>100</td>
            <td>1</td>
          </tr>
          <tr>
            <td colSpan="3">HACCP (80% mínimo)</td>
            <td>Sí</td>
            <td>Aprobado</td>
            <td>1</td>
          </tr>
          <tr>
            <td colSpan="3">PPR´s (80% mínimo)</td>
            <td>Sí</td>
            <td>Aprobado</td>
            <td>1</td>
          </tr>
          <tr>
            <td colSpan="3">Microbiología básica (80% mínimo)</td>
            <td>Sí</td>
            <td>100</td>
            <td>1</td>
          </tr>
          <tr className="section-header">
            <td colSpan="6">CONOCIMIENTOS Y HABILIDADES:</td>
          </tr>
          <tr>
            <td colSpan="4">Conocimiento del proceso de la empresa (debe conocer las etapas del proceso de la planta)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Documentos del SGI y de referencia (qué tanto conoce las Normas aplicables a la empresa)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Requisitos legales aplicables (ISO/TS 22002-1 2009, ISO 22000: 2018, HACCP, NOM 251-SSA1-2009)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Principios, procedimientos y técnicas de auditoría</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Recopila información (entrevistas eficaces, escucha, observa, revisa documentos y registros)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr className="section-header">
            <td colSpan="6">FORMACIÓN PROFESIONAL:</td>
          </tr>
          <tr>
            <td colSpan="2">NIVEL DE ESTUDIOS</td>
            <td>ESPECIALIDAD</td>
            <td>PUNTUACIÓN</td>
            <td>COMENTARIOS</td>
          </tr>
          <tr>
            <td colSpan="2">Secundaria (1 punto)</td>
            <td rowSpan="2">Químico Farmacobiólogo</td>
            <td rowSpan="2">3</td>
            <td rowSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="2">Carrera Técnica (2 puntos)</td>
          </tr>
          <tr>
            <td colSpan="2">Carrera Profesional (3 puntos)</td>
            <td rowSpan="2"></td>
            <td rowSpan="2"></td>
            <td rowSpan="2"></td>
          </tr>
          <tr className="section-header">
            <td colSpan="6">ATRIBUTOS Y CUALIDADES PERSONALES:</td>
          </tr>
          <tr>
            <td colSpan="4">Ético (imparcial, honesto, discreto)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Versátil (se adapta fácilmente a las diferentes situaciones)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Perceptivo (consiente y capaz de entender las situaciones)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">De mente abierta (muestra disposición a considerar ideas o puntos de vista alternativos)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Diplomático (muestra tacto en las relaciones personales)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Observador (considera el entorno físico y de las actividades)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Seguro de sí mismo (actúa y funciona de manera independiente, a la vez se relaciona eficazmente con los otros)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr>
            <td colSpan="4">Presentación esquemática (informa con veracidad y exactitud los hallazgos, conclusiones e informes de la auditoría, entrega en tiempo y forma los reportes de auditoría, presentación profesional idónea)</td>
            <td className="score-column">5</td>
            <td className="score-column">4</td>
            <td className="score-column">3</td>
            <td className="score-column">2</td>
            <td className="score-column">1</td>
          </tr>
          <tr className="section-header">
            <td colSpan="6">INDICADORES DE EVALUACIÓN</td>
          </tr>
          <tr>
            <td>Experiencia</td>
            <td>Puntuación Máxima</td>
            <td>Valor en %</td>
            <td>Capacitación</td>
            <td>Puntuación Máxima</td>
            <td>Valor en %</td>
          </tr>
          <tr>
            <td>Experiencia</td>
            <td>10</td>
            <td>10%</td>
            <td>Capacitación</td>
            <td>5</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Conocimientos y habilidades</td>
            <td>25</td>
            <td>30%</td>
            <td>Formación profesional</td>
            <td>3</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Atributos y cualidades personales</td>
            <td>40</td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="section-header">
            <td colSpan="6">CALIFICACIÓN TOTAL OBTENIDA</td>
          </tr>
          <tr>
            <td>80-100%</td>
            <td>Competente y candidato a ser auditor líder (evaluación anual)</td>
            <td>80-84%</td>
            <td>Competente y es candidato a formar parte del equipo de inocuidad (evaluación semestral)</td>
            <td>60-79%</td>
            <td>Se puede considerar auditor de entrenamiento (evaluación trimestral)</td>
          </tr>
          <tr>
            <td>Menor a 59%</td>
            <td>Se considera no competente y fuera del equipo auditor</td>
            <td colSpan="4"></td>
          </tr>
          <tr className="section-header">
            <td colSpan="6">AUDITORÍA EN ENTRENAMIENTO: El evaluado debe cumplir por lo menos con una auditoría de entrenamiento.</td>
          </tr>
          <tr>
            <td>Auditoría en la que participó</td>
            <td>Fecha de Auditoría</td>
            <td>Nombre del Auditor Líder</td>
          </tr>
          <tr>
            <td>6. Control de madera</td>
            <td>01/04/2018</td>
            <td>Rubén Cruces Paz</td>
          </tr>
          <tr>
            <td>8. Control de químicos</td>
            <td>01/04/2018</td>
            <td>Rubén Cruces Paz</td>
          </tr>
          <tr>
            <td colSpan="3"><strong>Comentarios:</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
  
  export default EvaluationTable;