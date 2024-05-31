const nodemailer = require('nodemailer');
require('dotenv').config(); // Carga las variables de entorno

// Configuración del transportador
const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Opciones del correo
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'soleje2862004@gmail.com', // Cambia esto por un correo de prueba
  subject: 'Prueba de correo electrónico',
  text: 'Este es un correo de prueba.',
};

// Enviar el correo
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error al enviar el correo electrónico:', error);
  } else {
    console.log('Correo electrónico enviado:', info.response);
  }
});
