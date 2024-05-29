// authRoutes.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Ruta para verificar el token JWT
router.post('/verifyToken', (req, res) => {
  const token = req.body.token;

  // Verifica el token JWT
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // El token no es válido
      return res.status(401).json({ error: 'Token inválido' });
    } else {
      // El token es válido
      return res.status(200).json({ message: 'Token válido' });
    }
  });
});

module.exports = router;
