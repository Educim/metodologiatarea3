const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Usuario',
  tableName: 'usuarios',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    nombre: {
      type: 'varchar',
      length: 100,
    },
    apellido: {
      type: 'varchar',
      length: 100,
    },
    email: {
      type: 'varchar',
      length: 150,
      unique: true,
    },
    edad: {
      type: 'int',
      nullable: true,
    },
    created_at: {
      type: 'timestamp',
      createDate: true,
    },
  },
});
