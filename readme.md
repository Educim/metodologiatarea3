# 🚀 Backend de Usuarios - Metodología de Desarrollo

Este es un proyecto educativo diseñado para enseñar los fundamentos del desarrollo Backend utilizando **Node.js**, **Express**, **TypeORM** y **PostgreSQL**.

## 🛠️ Tecnologías utilizadas

- **Node.js & Express**: Framework base para el servidor y las rutas.
- **TypeORM**: ORM para la gestión de la base de datos PostgreSQL.
- **Joi**: Validación de datos de entrada.
- **Dotenv**: Manejo de variables de entorno.
- **Nodemon**: Herramienta de desarrollo para reinicio automático del servidor.

## 📁 Estructura del Proyecto

```text
src/
├── config/         # Configuración de DB y Setup inicial
├── controllers/    # Lógica de las peticiones HTTP (Request/Response)
├── entities/       # Modelos de la base de datos (TypeORM)
├── handlers/       # Manejadores de respuestas estandarizadas
├── routes/         # Definición de los endpoints (Rutas)
├── services/       # Lógica de negocio y consultas a la DB
├── validations/    # Esquemas de validación con Joi
└── index.js        # Punto de entrada de la aplicación
```

## ⚙️ Configuración Inicial

1. **Dependencias**: Instala los paquetes necesarios con `npm install`.
2. **Base de Datos**: Crea una base de datos llamada `metodologia_db` en pgAdmin.
3. **Entorno**: Copia `.env.example` a `.env` y configura tus credenciales de PostgreSQL.
4. **Setup**: Ejecuta `npm run setup` para sincronizar las tablas y cargar datos iniciales.
5. **Ejecución**: Usa `npm run dev` para iniciar el servidor en modo desarrollo.

## 📝 Tarea para Estudiantes

El objetivo es completar el sistema CRUD de usuarios. Actualmente, solo la creación de usuarios (`POST`) está totalmente operativa. Debes:

1.  **Completar Servicios**: Implementar la lógica de consulta en `src/services/usuarioService.js`.
2.  **Completar Controladores**: Manejar la lógica de respuesta y errores en `src/controllers/usuarioController.js`.
3.  **Habilitar Rutas**: Descomentar los endpoints en `src/routes/usuarioRoutes.js`.
4.  **Validación**: Completar el esquema de actualización en `src/validations/usuarioValidation.js`.

---
*Para instrucciones detalladas sobre cómo completar cada paso, consulta la [Guía de Tarea](GUIA_TAREA.md).*
