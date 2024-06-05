const Programas = require('../models/programaSchema');
const XLSX = require('xlsx');

const obtenerProgramas = async (req, res) => {
  try {
    const programas = await Programas.find();
    res.status(200).json(programas);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const crearPrograma = async (req, res) => {
  try {
    const { Nombre, Descripcion } = req.body;
    const nuevoPrograma = new Programas({ Nombre, Descripcion });
    await nuevoPrograma.save();
    res.status(201).json(nuevoPrograma);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const cargaMasiva = async (req, res) => {
  try {
    const filePath = req.file.path;

    // Leer el archivo Excel
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    const programas = [];
    let nombreProgramaActual = null;
    let descripciones = [];

    data.forEach(row => {
      console.log(row); // Añadir este log para depurar el valor de row
      // Verificar si es una fila con el nombre del programa
      if (row['Nombre del Programa']) {
        // Si encontramos un nuevo nombre de programa, almacenamos las descripciones del programa anterior
        if (nombreProgramaActual) {
          programas.push({ Nombre: nombreProgramaActual, Descripcion: descripciones });
          descripciones = []; // Reiniciar descripciones para el nuevo programa
        }
        nombreProgramaActual = row['Nombre del Programa']; // Actualizar el nombre del programa actual
      }

      // Agregar la descripción con el ID proporcionado
      if (row['Descripción del Requisito'] && row['ID']) {
        descripciones.push({
          ID: row['ID'].toString().trim(), // Convertir el ID a cadena
          Requisito: row['Descripción del Requisito'].trim()
        });
      } else if (row['Descripción del Requisito']) {
        console.error(`ID no está presente o no es una cadena: ${row.ID}`);
      }
    });

    // Agregar el último grupo de descripciones (si existe)
    if (nombreProgramaActual) {
      programas.push({ Nombre: nombreProgramaActual, Descripcion: descripciones });
    }

    // Verificar el contenido de programas antes de insertarlo
    console.log(JSON.stringify(programas, null, 2));

    // Insertar los programas en la base de datos
    await Programas.insertMany(programas);

    res.status(201).json({ message: 'Programas cargados exitosamente' });
  } catch (error) {
    console.error('Error al cargar programas:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
};


module.exports = {
  obtenerProgramas,
  crearPrograma,
  cargaMasiva,
};
