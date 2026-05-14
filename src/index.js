require('reflect-metadata');
/**
 * Punto de entrada de la aplicación
 * Inicializa el servidor Express
 */

const express = require('express');
const config = require('./config/config');
const db = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/usuarios', usuarioRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido al backend de usuarios',
    version: '1.0.0'
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    mensaje: 'Ruta no encontrada'
  });
});

// Iniciar servidor
db.initialize()
  .then(() => {
    console.log('✅ Base de datos conectada con TypeORM');
    app.listen(config.PORT, () => {
      console.log(`✅ Servidor ejecutándose en puerto ${config.PORT}`);
      console.log(`🔗 http://localhost:${config.PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar la base de datos:', error);
  });
