require('reflect-metadata');
const AppDataSource = require('./db');
const Usuario = require('../entities/Usuario');

const initialSetup = async () => {
  try {
    console.log('🔄 Iniciando configuración inicial...');
    
    await AppDataSource.initialize();
    console.log('✅ Conexión establecida');

    // Sincronizar tablas (crear si no existen)
    await AppDataSource.synchronize(true);
    console.log('✅ Tablas creadas/sincronizadas');

    // Opcional: Seeding (Datos iniciales)
    const usuarioRepository = AppDataSource.getRepository(Usuario);
    const count = await usuarioRepository.count();
    
    if (count === 0) {
      console.log('🌱 Insertando datos de prueba...');
      const usuariosPrueba = [
        { nombre: 'Juan', apellido: 'Perez', email: 'juan.perez@example.com', edad: 25 },
        { nombre: 'Maria', apellido: 'Garcia', email: 'maria.garcia@example.com', edad: 30 }
      ];
      
      const entities = usuarioRepository.create(usuariosPrueba);
      await usuarioRepository.save(entities);
      console.log('✅ Datos de prueba insertados');
    }

    console.log('✨ Configuración completada con éxito');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error durante la configuración inicial:', error);
    process.exit(1);
  }
};

initialSetup();
