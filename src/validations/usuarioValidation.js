/**
 * Validaciones para Usuarios
 * Aquí definimos las reglas que deben cumplir los datos
 */

const Joi = require('joi');

// Esquema para crear un usuario
const createUsuarioSchema = Joi.object({
  nombre: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.empty': 'El nombre no puede estar vacío',
      'string.min': 'El nombre debe tener al menos 3 caracteres'
    }),
  
  apellido: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.empty': 'El apellido no puede estar vacío',
      'string.min': 'El apellido debe tener al menos 3 caracteres'
    }),
  
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Debes ingresar un email válido',
      'string.empty': 'El email no puede estar vacío'
    }),
  
  edad: Joi.number()
    .integer()
    .min(18)
    .max(120)
    .required()
    .messages({
      'number.min': 'Debes ser mayor de 18 años',
      'number.max': 'La edad no puede superar 120 años'
    })
});

// Esquema para actualizar un usuario (todos los campos opcionales)
// TODO: Por completar cuando implementes PATCH//9
const updateUsuarioSchema = Joi.object({
  // Ayudita: Usa las mismas validaciones de arriba pero con required() removido
  // Ejemplo: 
  // nombre: Joi.string().alphanum().min(3).max(30).optional()
}).min(1); // Al menos debe enviarse un campo

module.exports = {
  createUsuarioSchema,
  updateUsuarioSchema
};
