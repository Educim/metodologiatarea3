/**
 * Controlador de Usuarios
 * Maneja las peticiones HTTP relacionadas con usuarios
 */

const { sendSuccess, sendError } = require('../handlers/responseHandler');
const usuarioService = require('../services/usuarioService');
const { createUsuarioSchema, updateUsuarioSchema } = require('../validations/usuarioValidation');

/**
 * POST /usuarios
 * Crea un nuevo usuario
 */
const crearUsuario = async (req, res) => {
  try {
    //Validamos los datos de entrada con Joi
    const { error, value } = createUsuarioSchema.validate(req.body);

    if (error) {
      return sendError(
        res,
        'Error en validación de datos',
        400,
        error.details.map(err => err.message)
      );
    }

    // Llamamos al servicio para crear el usuario
    const usuarioCreado = await usuarioService.crearUsuario(value);

    // Respondemos con éxito
    return sendSuccess(
      res,
      usuarioCreado,
      'Usuario creado exitosamente',
      201
    );
  } catch (error) {
    console.error(error);
    return sendError(res, 'Error al crear usuario', 500);
  }
};

/**
 * GET /usuarios
 * Obtiene todos los usuarios
 */
const obtenerTodosLosUsuarios = async (req, res) => {
  try {
    //Llamar al servicio para obtener todos los usuarios
    const usuarios = await usuarioService.obtenerTodosLosUsuarios();

    return sendSuccess(
      res,
      usuarios,                             
      'Usuarios obtenidos exitosamente',     
      200                                   
    );

  } catch (error) {
    console.error(error);
    return sendError(res, 'Error al obtener usuarios', 500);
  }
};

/**
 * GET /usuarios/:id
 * Obtiene un usuario específico por ID
 */
const obtenerUsuarioPorId = async (req, res) => {
  try {
    //Extraer el ID de los parámetros de la URL
    const { id } = req.params;
    //Llamar al servicio para buscar el usuario
    const usuario = await usuarioService.obtenerUsuarioPorId(id);
    //Retorna el usuario si existe, o null si no existe

    //Verifica si el usuario existe
    if (!usuario) {
      return sendError(
        res,
        'Usuario no encontrado',    
        404                         
      );
    }

    //Si existe, responder con éxito
    return sendSuccess(
      res,
      usuario,
      'Usuario obtenido exitosamente',
      200
    );

  } catch (error) {
    console.error(error);
    return sendError(res, 'Error al obtener usuario', 500);
  }
};

/**
 * PATCH /usuarios/:id
 * Actualiza un usuario existente
 */
const actualizarUsuario = async (req, res) => {
  try {

    const { error, value } = updateUsuarioSchema.validate(req.body);
    if (error) {
      return sendError(
        res,
        'Error en validación de datos',
        400,
        error.details.map(err => err.message)
      );
    }
    const { id } = req.params;

    //Llamar al servicio para actualizar
    const usuarioActualizado = await usuarioService.actualizarUsuario(id, value);
    //Verificar si el usuario existe
    if (!usuarioActualizado) {
      return sendError(
        res,
        'Usuario no encontrado',
        404
      );
    }

    return sendSuccess(
      res,
      usuarioActualizado,
      'Usuario actualizado exitosamente',
      200
    );

  } catch (error) {
    console.error(error);
    return sendError(res, 'Error al actualizar usuario', 500);
  }
}

/**
 * DELETE /usuarios/:id
 * Elimina un usuario
 */
const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await usuarioService.eliminarUsuario(id);

    if (!eliminado) {
      return sendError(
        res,
        'Usuario no encontrado',
        404
      );
    }

    return sendSuccess(
      res,
      null,
      'Usuario eliminado exitosamente',
      200
    );
    
  } catch (error) {
    console.error(error);
    return sendError(res, 'Error al eliminar usuario', 500);
  }
};

module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};
