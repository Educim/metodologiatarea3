/**
 * Servicio de Usuarios
 * Contiene la lógica de negocio para gestionar usuarios
 * 
 * Este archivo es el "cerebro" de las operaciones con usuarios.
 * Aquí se ejecutan las consultas a la base de datos usando TypeORM.
 */

const db = require('../config/db');
// Importamos la conexión a la base de datos configurada con TypeORM

const Usuario = require('../entities/Usuario');
// Importamos la entidad Usuario (el modelo que define la tabla en la BD)

const usuarioRepository = db.getRepository(Usuario);

const crearUsuario = async (datosUsuario) => {

  const nuevoUsuario = usuarioRepository.create(datosUsuario);

  return await usuarioRepository.save(nuevoUsuario);
  // .save() GUARDA el usuario en la base de datos
};

const obtenerTodosLosUsuarios = async () => {
  return await usuarioRepository.find();
};

const obtenerUsuarioPorId = async (id) => {
  // id = el identificador único del usuario que queremos buscar

  return await usuarioRepository.findOneBy({ id: parseInt(id) });
};

const actualizarUsuario = async (id, datosActualizados) => {

  const resultado = await usuarioRepository.update(
    parseInt(id),
    datosActualizados
  );

  if (resultado.affected === 0) {
    // Si affected es 0, significa que no existe un usuario con ese ID
    return null;
  }

  return await obtenerUsuarioPorId(id);
};

const eliminarUsuario = async (id) => {
  const resultado = await usuarioRepository.delete(parseInt(id));

  return resultado.affected > 0;
};

// Exportamos todas las funciones para usarlas en el controlador
module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};