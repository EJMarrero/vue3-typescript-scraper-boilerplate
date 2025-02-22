const express = require('express');
const cors = require('cors');

const app = express();

// Permitir peticiones CORS para todas las rutas y métodos
app.use(cors());
// Manejar solicitudes preflight (OPTIONS)
app.options('*', cors());

// Rutas de tu API
app.get('/api/opiniones', (req, res) => {
  res.json({ message: 'Opiniones' });
});

// Otras rutas...

app.listen(5000, () => console.log('Servidor iniciado en el puerto 5000')); 