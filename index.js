// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS (opcional)
const cors = require('cors');
app.use(cors());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.json({ message: "¡Hola desde mi API de Express!" });
});

// Ruta con parámetros
app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({ mensaje: `¡Hola, ${nombre}!` });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
