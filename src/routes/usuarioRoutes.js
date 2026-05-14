/**
 * Rutas de Usuarios
 * Aquí definimos los endpoints relacionados con usuarios
 */

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// POST /usuarios - Crear un nuevo usuario (IMPLEMENTADO)
router.post('/', usuarioController.crearUsuario);

// GET /usuarios - Obtener todos los usuarios
// TODO: Descomenta la siguiente línea cuando implementes la función en el controlador
router.get('/', usuarioController.obtenerTodosLosUsuarios);

// GET /usuarios/:id - Obtener un usuario específico
// TODO: Descomenta la siguiente línea cuando implementes la función en el controlador
router.get('/:id', usuarioController.obtenerUsuarioPorId);

// PATCH /usuarios/:id - Actualizar un usuario
// TODO: Descomenta la siguiente línea cuando implementes la función en el controlador
router.patch('/:id', usuarioController.actualizarUsuario);

// DELETE /usuarios/:id - Eliminar un usuario
// TODO: Descomenta la siguiente línea cuando implementes la función en el controlador
 router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
